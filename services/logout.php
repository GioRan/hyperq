<?php
	if(session_status() != 2){
		session_start();
	}
	
	if(isset($_SESSION['id'])){
		unset($_SESSION['id']);
		echo 1;
	}
?>