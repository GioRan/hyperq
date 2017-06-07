<?php
	require('connection/connection.php');

	if (isset($_POST['order'])) {
		$data =  $_POST['order'];
		$orderId = uniqid();
		$date = date('Y-m-d H:i:s');
		$status = array();
		$client = "";

		for($i = 0;$i < count($data);$i++){
			$itemId = $data[$i]['id'];
			$clientId = $data[$i]['client'];
			$count = $data[$i]['count'];
			
			$query = mysql_query("INSERT INTO tbl_order(order_id, item_id, user_id, count, date) VALUES('$orderId', '$itemId', '$clientId', '$count', '$date')");
			
			if($query){
				array_push($status, true);
			} else{
				array_push($status, false);
			}
			$client = $clientId;
		}
		$query = mysql_query("UPDATE tbl_user SET order_status = 1 WHERE user_id = '$client'");
		echo json_encode($status);
	}

?>