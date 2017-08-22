window.functions = {
	//filter router routes
	filterRouter: function(data){
		if(data.page != "" && data.param1 == ""){
			switch(data.page){
				case "index":
					$("body").append("<div class='navbarMain'></div>");
					$("body").append("<div class='sidebarMain'></div>");
					$("body").append("<div class='indexMain'></div>");
					window.functions.initializeNavbar();
					window.functions.initializeSidebar();
					window.functions.initializeFoods();
					break;
				case "مشرف":
					var adminJS = $("<script async src='./scripts/admin.js'></script>")
					$("head").append(adminJS);
					break;
				default:
					return false;
			}
		}
	},
	initializeNavbar: function(){
		var navbar = window.template.navbarTemplateMain();
		$(".navbarMain").html(navbar);
		
		var isLoggedIn = window.info.client.isLoggedIn;
		if(isLoggedIn){
			var navbarLoggedIn = window.template.navbarLoggedInTemplate();
			$("#override-navbar-wrapper").html(navbarLoggedIn);
			
		} else{
			var navbarNotLoggedIn = window.template.navbarNotLoggedInTemplate();
			$("#override-navbar-wrapper").html(navbarNotLoggedIn);
			window.events.loginModal();
		}
	},
	initializeSidebar: function(){
		var sidebar = window.template.sidebarTemplate();
		$(".sidebarMain").html(sidebar);
		$(".button-collapse").sideNav();
		window.events.userInfoModal();
		window.events.sidebarSignOut();
	},
	initializeFoods: function(){
		window.services.getFoods(function success(result){
			var data = JSON.parse(result);
			var element = [];
			
			for(var i = 0; i < data.length; i++){
				var id = data[i].id;
				var item = data[i].name;
				var price = data[i].price;
				var image = data[i].image;
				var card = window.template.cardTemplate(id, item, price, image);
				element.push(card);
			}
			var index = window.template.indexTemplate();
			$(".indexMain").html(index);
			$("#foods").html(element);
		});
	},
	//user event on submitting form register
	formGetRegister: function(data){
		if(data.name.trim() == ""){
			$("#fullnameError").html("<span class='mdl-textfield__error'>This field is required.</span>");
			$("#fullnameTextField").addClass("is-invalid");
		} else if(data.contact.trim() == ""){
			$("#contactError").html("<span class='mdl-textfield__error'>This field is required.</span>");
			$("#contactTextField").addClass("is-invalid");
		} else if(data.password.trim() == ""){
			$("#passwordError").html("<span class='mdl-textfield__error'>This field is required.</span>");
			$("#passwordTextField").addClass("is-invalid");
		} else{
			if(!/^[A-Za-z\s]+$/.test(data.name.trim())){
				$("#fullnameError").html("<span class='mdl-textfield__error'>Only Letters are allowed</span>");
				$("#fullnameTextField").addClass("is-invalid");
			} else if(!/^\d{11}$/.test(data.contact.trim())){
				$("#contactError").html("<span class='mdl-textfield__error'>Only numbers and must be 11 digits</span>");
				$("#contactTextField").addClass("is-invalid");
			} else if(data.password.trim() != data.repass.trim()){
				$("#repassError").html("<span class='mdl-textfield__error'>Password does not match</span>");
				$("#errorpasswordTextField").addClass("is-invalid");
			} else{
				window.services.register(data, function success(result){
					if(result == 0){
						$("#contactError").html("<span class='mdl-textfield__error'>Contact Number is already existing.</span>");
						$("#contactTextField").addClass("is-invalid");
					} else if(result == 1){
						//window.location.href = "./login";
						$(".modal").modal("close");
						window.events.submitModal();
					}
				});
			}
		}
	},
	//user event on submitting form login
	formGetLogin: function(data){
		$("#progress").addClass("progress");
		if(data.contact.trim() == ""){
			$("#contactError").html("<span class='mdl-textfield__error'>This field is required.</span>");
			$("#contactTextField").addClass("is-invalid");
			$("#progress").removeClass("progress");
		} else if(data.password.trim() == ""){
			$("#passwordError").html("<span class='mdl-textfield__error'>This field is required.</span>");
			$("#passwordTextField").addClass("is-invalid");
			$("#progress").removeClass("progress");
		} else {
			window.services.login(data, function success(result){
				var result = JSON.parse(result);
				if(result == 0){
					$("#contactError").html("<span class='mdl-textfield__error'>Wrong Contact Number.</span>");
					$("#contactTextField").addClass("is-invalid");
					$("#passwordError").html("<span class='mdl-textfield__error'>Wrong Password.</span>");
					$("#passwordTextField").addClass("is-invalid");
					$("#progress").removeClass("progress");
				} else{
					window.info.pushToClientInfo(result.user);
					window.info.client.isLoggedIn = true;
					window.functions.initializeNavbar();
					window.functions.initializeSidebar();
					$("#progress").removeClass("progress");
					$(".modal").modal("close");
				}
			});
		}
	},
	userInfoUpdate: function(data){
		if(data.name == window.info.client.clientName && data.contact == window.info.client.clientContact){
			$(".modal").modal("close");
			var modal = window.template.userInfoNoUpdateModal();
			$("#modalContainer").html(modal);
			window.templateOptions.userInfoNoUpdateModalOption();
		} else{
			if(data.name.trim() == ""){
				$("#fullnameError").html("<span class='mdl-textfield__error'>This field is required.</span>");
				$("#fullnameTextField").addClass("is-invalid");
			} else if(data.contact.trim() == ""){
				$("#contactError").html("<span class='mdl-textfield__error'>This field is required.</span>");
				$("#contactTextField").addClass("is-invalid");
			} else{
				var data = {
					id: localStorage.clientId,
					name: data.name,
					contact: data.contact,
				}
				window.services.updateInfo(data, function success(result){
					if(result == 1){
						window.functions.initializeSidebar();
						$(".modal").modal("close");
						var modal = window.template.userInfoSavedModal();
						$("#modalContainer").html(modal);
						window.templateOptions.userInfoSavedModalOption();
					}
				});
			}
		}
	},
	//user event on submitting order
	submitOrder: function(data){
		window.services.postOrder(data, function success(result){
			var indexOf = result.indexOf(false);
			if(indexOf > 0){
				
			}else{
				window.info.client.clientOrderStatus = 1;
				var modal = window.template.orderSubmittedModal();
				$("#modalContainer").html(modal);
				$(".modal").modal({
					dismissible: true, // Modal can be dismissed by clicking outside of the modal
					opacity: .5, // Opacity of modal background
					inDuration: 300, // Transition in duration
					outDuration: 200, // Transition out duration
					startingTop: '4%', // Starting top style attribute
					endingTop: '10%' // Ending top style attribute
				}).modal("open");
			}
		});
	}
}