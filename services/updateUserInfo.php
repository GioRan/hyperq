<?php
	require('connection/connection.php');

	$user_id = $_POST['id']; 
	$name = $_POST['name'];
	$contact = $_POST['contact'];

	if (isset($user_id) && isset($name) && isset($contact)) {

		$validateQuery = mysql_query("SELECT * FROM tbl_user where user_id = '$user_id'");

		if (mysql_num_rows($validateQuery) == 1) {
				
			$query = mysql_query("UPDATE tbl_user SET name = '$name' , contact = '$contact' WHERE user_id = '$user_id'");
					
			if ($query) {
				echo 1;
			}else{
				echo 0;
			}
		}else{
			echo 0;
		}
	}
?>



