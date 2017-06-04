window.services = {
	//register new client
    register: function(data, success){
        $.ajax({
            url: "http://www.hyperq.com/GIO/services/registration.php",
            data: data,
            type: "POST",
			method: "POST",
            success: function(data){
                success(data);
            },
            error: function(xhr){
				console.log(xhr);
			}
        });
    },
	//validate login client
    login: function(data, success){
        $.ajax({
            url: "http://www.hyperq.com/GIO/services/login.php",
            data: data,
            type: "POST",
			method: "POST",
            success: function(data){
                success(data);
            },
            error: function(xhr){
                console.log(xhr);
            }
        });
    },
	//get foods from db
	getFoods: function(success){
		$.ajax({
            url: "http://www.hyperq.com/GIO/services/fetchItems.php",
            type: "GET",
            success: function(data){
                success(data);
            },
            error: function(xhr){
                console.log(xhr);
            }
        });
	},
	//submit order from client
	postOrder: function(data, success){
		$.ajax({
			url: "http://www.hyperq.com/GIO/services/ordering.php",
			data: data,
			type: "POST",
			method: "POST",
			success: function(data){
				success(data);
			},
			error: function(xhr){
				console.log(xhr);
			}
		});
	},
	//check if user is logged in
	checkLoginSession: function(success){
		$.ajax({
			url: "http://www.hyperq.com/GIO/services/checkLoginSession.php",
			type: "GET",
			success: function(data){
				success(data);
			}
		});
	},
	signOut: function(success){
		$.ajax({
			url: "http://www.hyperq.com/GIO/services/logout.php",
			type: "GET",
			success: function(data){
				success(data);
			}
		});
	}
}