<?php
	if(isset($_SESSION['id'])){
		unset($_SESSION['id']);
		echo 1;
	}
?>