<?php

	require('connection/connection.php');

	$query = mysql_query("SELECT * FROM tbl_item");
	//$query = mysql_query("SELECT name, price FROM tbl_item");

	if ($query){
		$array = array(); //send an array of objects, so lets create array
	    while ($row = mysql_fetch_array($query)){

            $item = new stdClass();
			$item->id = $row['item_id'];
            $item->name = $row['name'];
            $item->price = $row['price'];
			$item->image = $row['image'];
			
			//echo json_encode($item); put this outside of loop, so we can echo all the object that's inside the array
            array_push($array, $item); //push to array per object
        }
		echo json_encode($array);
    }else{
	    echo "error in query";
    }



?>