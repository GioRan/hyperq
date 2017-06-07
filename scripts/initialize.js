window.initialize = function(data){
	var data = data;
	
	//check login session
	(function checkLoginSession(){
		window.services.checkLoginSession(function success(result){
			var result = JSON.parse(result);
			if(result.status == 1){
				window.info.pushToClientInfo(result.user);
				window.info.client.isLoggedIn = true;
				window.functions.filterRouter(data);
			} else{
				window.functions.filterRouter(data);
			}
		});
	})();
	
	//native router
	/*(function routerRoute(){
		window.functions.filterRouter(data);
	})();*/
}