<?php
	require('connection/connection.php');

	$username = $_POST['contact']; 
	$password = $_POST['password']; 

	if (isset($username) && isset($password)) {
		$query = mysql_query("SELECT contact, password FROM tbl_user WHERE contact = '$username' AND password = '$password'");

		if ($query) {
			if (mysql_num_rows($query) == 1) {
				// dens i need the user infos when login succeed for the javascript localstorage, counterpart of session in php, sorry my mistake, i'll add some codes..
				$query = mysql_query("SELECT * FROM tbl_user WHERE contact = '$username' AND password = '$password'");
				if($query){
					$row = mysql_fetch_array($query);
					
					$user = new stdClass();
					
					$user->id = $row['user_id'];
					$user->password = $row['password'];
					$user->name = $row['name'];
					$user->contact = $row['contact'];
					$user->order_status = $row['order_status'];
					
					$_SESSION['id'] = $row['user_id'];
					
					$data = new stdClass();
					$data->user = $user;
					$data->status = 1;
					echo json_encode($data);
				}
			}else{
				echo 0;
			}
		}else{
			echo "Error in query";
		}
	}
?>