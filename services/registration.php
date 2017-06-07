<?php
	require('connection/connection.php');

		$name = $_POST['name'];
		$contact = $_POST['contact'];
		$password = $_POST['password'];

		if (isset($name) && isset($contact) && isset($password)) {

			$validateQuery = mysql_query("SELECT * FROM tbl_user where contact = '$contact'");

			if (mysql_num_rows($validateQuery) == 0) {
				
					$query = mysql_query("INSERT INTO tbl_user (user_id,name,contact,password,order_status) VALUES (uuid(),'$name','$contact','$password', 0)");

					if ($query) {
						echo 1;
					}
			}else{
				echo 0;
			}
		}
?>