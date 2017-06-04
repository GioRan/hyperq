window.events = function(){
	var inst = this;
	
	this.sidebarSignOut = function(){
		window.services.signOut(function success(result){
			if(result == 1){
				localStorage.clear();
				$('.button-collapse').sideNav('hide');
				window.info.client.isLoggedIn = false;
				window.template.navbarTemplate();
				window.template.sidebarTemplate();
				//window.location.href = "http://hyperq.com/GIO/login";
			}
		});
	}
	
	//card function
	this.addItemCount = function(item, price, event){
		var element = event.currentTarget.previousSibling.value;
		var int = parseInt(element);
		int++;
		event.currentTarget.previousSibling.value = int;
	}
	
	this.minusItemCount = function(item, price, event){
		var element = event.currentTarget.nextElementSibling.value;
		var int = parseInt(element);
		int--;
		if(int >= 0){
			event.currentTarget.nextElementSibling.value = int;
		} else if(int < 0){
			event.currentTarget.nextElementSibling.value = 0;
		}
	}
	
	//userInfo Modal
	this.userInfoModal = function(){
		$('.button-collapse').sideNav('hide');
		var modal = window.template.userInfoModal();
		$("#modalContainer").html(modal);
		componentHandler.upgradeDom();
		$(".modal").modal({
			dismissible: true, // Modal can be dismissed by clicking outside of the modal
			opacity: .5, // Opacity of modal background
			inDuration: 300, // Transition in duration
			outDuration: 200, // Transition out duration
			startingTop: '4%', // Starting top style attribute
			endingTop: '10%' // Ending top style attribute
		}).modal("open");
		(function login(){
			$(".loginButton").click(function(){
				var data = {
					contact: $("#contactnumber").val(),
					password: $("#password").val()
				}
				window.functions.formGetLogin(data);
			});
		})();
	}
	
	//submit modal
	this.submitModal = function(){
		var isLoggedIn = window.info.client.isLoggedIn;
		if(!isLoggedIn){
			var modal = window.template.loginModal();
			$("#modalContainer").html(modal);
			componentHandler.upgradeDom();
			$(".modal").modal({
				dismissible: true, // Modal can be dismissed by clicking outside of the modal
				opacity: .5, // Opacity of modal background
				inDuration: 300, // Transition in duration
				outDuration: 200, // Transition out duration
				startingTop: '4%', // Starting top style attribute
				endingTop: '10%' // Ending top style attribute
			}).modal("open");
			(function login(){
				$(".loginButton").click(function(){
					var data = {
						contact: $("#contactnumber").val(),
						password: $("#password").val()
					}
					window.functions.formGetLogin(data);
				});
			})();
			(function createAccount(){
				$(".createAccount").click(function(){
					var modal = window.template.createAccountModal();
					$(".modal").html(modal);
					$(".modal-content").css({"height": "400px"});
					componentHandler.upgradeDom();
					
					$(".registerButton").click(function(){
					var data = {
						name: $("#fullname").val(),
						contact: $("#contactnumber").val(),
						password: $("#password").val(),
						repass: $("#repass").val()
					}
					window.functions.formGetRegister(data);
				});
				});
			})();
		} else{
			var tray = $(".foodItem");
			var content = [];
			var total = [];
			var data = {
				order: [],
				total: null
			};
			var ifHaveValue = [];
			var modal = window.template.smallModal();
		
			for(var i = 0; i < tray.length; i++){
				var id = $(".id")[i].innerHTML;
				var item = $(".item")[i].innerHTML; //childNodes[0].childNodes[0].innerHTML;
				var price = $(".price")[i].innerHTML;//tray[i].childNodes[0].childNodes[1].innerHTML;
				var count = $(".itemCount")[i].value;//tray[i].childNodes[1].childNodes[2].value;
			
				if(count == 0){
					
				} else {
					ifHaveValue.push(true);
					price = parseInt(price);
					count = parseInt(count);
			
					var sum = price * count;
					content.push("<p>" + item + " x " + count + " = " +sum + "</p>");
					total.push(sum);
				
					var order = {
						id: id,
						client: window.info.client.clientId,
						item: item,
						price: price,
						count: count
					};
					data.order.push(order);
				}
			}	
			if(window.info.client.clientOrderStatus == 0){
				if(ifHaveValue.length == 0){
					var modal = window.template.noOrderModal();
					$("#modalContainer").html(modal);
					$(".modal").modal({
						dismissible: true, // Modal can be dismissed by clicking outside of the modal
						opacity: .5, // Opacity of modal background
						inDuration: 300, // Transition in duration
						outDuration: 200, // Transition out duration
						startingTop: '4%', // Starting top style attribute
						endingTop: '30%' // Ending top style attribute
					}).modal("open");
				}else{
					var sum = $("<p> Total: " + total.reduce((a, b) => a + b, 0) + "</p>");
					data.total = total.reduce((a, b) => a + b, 0);
			
					$("#modalContainer").html(modal);
					$("#items").html(content);
					$("#total").html(sum);
					$(".modal").modal({
						dismissible: true, // Modal can be dismissed by clicking outside of the modal
						opacity: .5, // Opacity of modal background
						inDuration: 300, // Transition in duration
						outDuration: 200, // Transition out duration
						startingTop: '4%', // Starting top style attribute
						endingTop: '10%' // Ending top style attribute
					}).modal("open");
		
					$("#modalSubmit").click(function(){
					window.functions.submitOrder(data);
					});
				}
			}else{
				var modal = window.template.alreadyOrderedModal();
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
		}
	}
}





