window.info = {
	//push info to client info
	pushToClientInfo: function(data){
		localStorage.clientId = data.id || null;
		localStorage.clientName = data.name || null;
		localStorage.clientContact = data.contact || null;
		localStorage.clientOrderStatus = data.order_status || null;
	},
	//client info
	client: {
		clientId: localStorage.clientId,
		clientContact: localStorage.clientContact,
		clientName: localStorage.clientName,
		clientOrderStatus: localStorage.clientOrderStatus,
		isLoggedIn: false
	}
}