(function(){
	$("body").html("");
	initializeAdmin();
})();

function initializeAdmin(){
	$("body").append("<div class='container'>" +
						"<div id='fullnameTextField' class='mdl-textfield mdl-js-textfield mdl-textfield--floating-label'>" +
							"<input class='mdl-textfield__input' type='text' id='contact'>" +
							"<label class='mdl-textfield__label' for='contact'>Contact Number</label>" +
							"<div id='fullnameError'></div>" +
						"</div>" +
					"</div>");
	componentHandler.upgradeDom();
}