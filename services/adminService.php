<?php
	require('connection/connection.php');
	
	$search = $_POST['search'];
	
	//if search is empty
	if($search == ""){
		$query = mysql_query("SELECT tbl_user.name, tbl_user.contact, tbl_item.name, tbl_item.price, tbl_order.count, tbl_order.date FROM tbl_user, tbl_order, tbl_item WHERE tbl_user.user_id = tbl_order.user_id AND tbl_item.item_id = tbl_order.item_id ORDER BY tbl_order.date");
		
		if(mysql_num_rows($query) > 0){
			$array = array();
			while($row = mysql_fetch_array($query)){
				$obj = new stdCLass();
				$obj->username = $row[0];
				$obj->contact = $row[1];
				$obj->itemname = $row[2];
				$obj->price = $row[3];
				$obj->count = $row[4];
				$obj->date = $row[5];
				
				array_push($array, $obj);
			}
			
			echo json_encode($array);
		}
	}else{
		//if search is username
		$query = mysql_query("SELECT tbl_user.name, tbl_user.contact, tbl_item.name, tbl_item.price, tbl_order.count, tbl_order.date FROM tbl_user, tbl_order, tbl_item WHERE tbl_user.user_id = tbl_order.user_id AND tbl_item.item_id = tbl_order.item_id AND tbl_user.name LIKE '%$search%' ORDER BY tbl_order.date");
		
		if(mysql_num_rows($query) > 0){
			$array = array();
			while($row = mysql_fetch_array($query)){
				$obj = new stdCLass();
				$obj->username = $row[0];
				$obj->contact = $row[1];
				$obj->itemname = $row[2];
				$obj->price = $row[3];
				$obj->count = $row[4];
				$obj->date = $row[5];
				
				array_push($array, $obj);
			}
			
			echo json_encode($array);
		}else{
			//if search is contact
			$query = mysql_query("SELECT tbl_user.name, tbl_user.contact, tbl_item.name, tbl_item.price, tbl_order.count, tbl_order.date FROM tbl_user, tbl_order, tbl_item WHERE tbl_user.user_id = tbl_order.user_id AND tbl_item.item_id = tbl_order.item_id AND tbl_user.contact LIKE '%$search%' ORDER BY tbl_order.date");
		
			if(mysql_num_rows($query) > 0){
				$array = array();
				while($row = mysql_fetch_array($query)){
					$obj = new stdCLass();
					$obj->username = $row[0];
					$obj->contact = $row[1];
					$obj->itemname = $row[2];
					$obj->price = $row[3];
					$obj->count = $row[4];
					$obj->date = $row[5];
				
					array_push($array, $obj);
				}
			
				echo json_encode($array);
			}else{
				//if search is item name
				$query = mysql_query("SELECT tbl_user.name, tbl_user.contact, tbl_item.name, tbl_item.price, tbl_order.count, tbl_order.date FROM tbl_user, tbl_order, tbl_item WHERE tbl_user.user_id = tbl_order.user_id AND tbl_item.item_id = tbl_order.item_id AND tbl_item.name LIKE '%$search%' ORDER BY tbl_order.date");
		
				if(mysql_num_rows($query) > 0){
					$array = array();
					while($row = mysql_fetch_array($query)){
						$obj = new stdCLass();
						$obj->username = $row[0];
						$obj->contact = $row[1];
						$obj->itemname = $row[2];
						$obj->price = $row[3];
						$obj->count = $row[4];
						$obj->date = $row[5];
					
						array_push($array, $obj);
					}
				
					echo json_encode($array);
				}else{
					echo 0;
				}
			}
		}
	}
?>