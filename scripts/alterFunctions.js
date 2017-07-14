window.alterFunctions = {
	loginModal: function(){
		var modal = window.template.loginModal();
		$("#modalContainer").html(modal);
		componentHandler.upgradeDom();
		window.templateOptions.loginModalOption();
		window.events.loginButton();
		window.events.createAccount();
	}
}