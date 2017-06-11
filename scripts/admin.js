(function(){
	$("body").html("");
	initializeAdmin();
})();

function initializeAdmin(){
	$("body").append("<div class='container'>" +
						"<form id='adminForm'>" +
							"<div id='fullnameTextField' class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label' style='width: 400px;'>" +
								"<input class='mdl-textfield__input' name='search' type='text' id='search'>" +
								"<label class='mdl-textfield__label' for='search'>Item Name/User Name/Contact Number</label>" +
							"</div>" +
						"</form>" +
						"<div>" +
							"<div id='progress'>" +
								"<div class='indeterminate'></div>" +
							"</div>" +
							"<table>" +
								"<thead>" +
									"<tr>" +
										"<th>User Name</th>" +
										"<th>Contact Number</th>" +
										"<th>Item Name</th>" +
										"<th>Item Price</th>" +
										"<th>Item Count</th>" +
										"<th>Date</th>" +
									"</tr>" +
								"</thead>" +
								"<tbody>" +							
								"</tbody>" +
							"</table>" +
						"</div>" +
					"</div>" +
					"<div id='modalContainer'></div>");
	componentHandler.upgradeDom();
}

(function(){
	$("#adminForm").submit(function(e){
		e.preventDefault();
		$("#progress").addClass("progress");
		var data = $(this).serialize();
		$.ajax({
			url: "./services/adminService.php",
			data: data,
			method: "POST",
			type: "POST",
			success: function(data){
				displayResults(data);
			}
		});
	});
})();

function displayResults(data){
	var data = JSON.parse(data);
	if(data == 0){
		$("tbody").html("");
		$("input").prop("disabled", true);
		var modal = noResultModal();
		$("#modalContainer").html(modal);
		$(".modal").modal({
			dismissible: true, // Modal can be dismissed by clicking outside of the modal
			opacity: .5, // Opacity of modal background
			inDuration: 300, // Transition in duration
			outDuration: 200, // Transition out duration
			startingTop: '4%', // Starting top style attribute
			endingTop: '10%', // Ending top style attribute
			complete: function() {
				$("input").prop("disabled", false); 
			}
		}).modal("open");
	} else{
		$("tbody").html("");
		for(var i = 0;i < data.length;i++){
			$("tbody").append("<tr>" +
								"<td>" + data[i].username + "</td>" +
								"<td>" + data[i].contact + "</td>" +
								"<td>" + data[i].itemname + "</td>" +
								"<td>" + data[i].price + "</td>" +
								"<td>" + data[i].count + "</td>" +
								"<td>" + data[i].date + "</td>" +
							"</tr>");
		}	
	}
	$("#progress").removeClass("progress");
}

function noResultModal(){	
	return 	$("<div class='modal'>" +
				"<div class='modal-content'>" +	
					"<p>No results found.</p>" +
				"</div>" +		
				"<div class='modal-footer'>" +
						"<button type='submit' class='modal-close modal-action waves-effect waves-teal btn-flat'>SUBMIT</button>" +
				"</div>" +
			"</div>");
}