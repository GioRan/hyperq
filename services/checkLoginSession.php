<?php
	require('connection/connection.php');
	if(session_status() != 2){
		session_start();
	}
	$data = new stdClass();
	if(isset($_SESSION['id'])){
		
		$sessionID = $_SESSION['id'];
		
		$query = mysql_query("SELECT * FROM tbl_user WHERE user_id = '$sessionID'");

		if(mysql_num_rows($query) == 1){
			$row = mysql_fetch_array($query);
			
			$user = new stdClass();					
			$user->id = $row['user_id'];
			$user->name = $row['name'];
			$user->contact = $row['contact'];
			$user->order_status = $row['order_status'];
			
			$data->user = $user;
			$data->status = 1;
			echo json_encode($data);
		}
	}else{
		$data->status = 0;
		echo json_encode($data);
	}
	
?>