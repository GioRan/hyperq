<html>
    <?php
        include('headers.html');
		
		//get request from .htaccess
		if(isset($_GET['request'])){
			$request = $_GET['request'];
		} else{
			$request = "";
		}
		
		if(isset($_GET['param1'])){
			$param1 = $_GET['param1'];
		} else{
			$param1 = "";
		}
   ?>
	<body>
	</body>
	<script>
		var request = {
			page: "<?php echo $request; ?>",
			param1: "<?php echo $param1; ?>"
		}
		var init = new window.initialize(request);
		var events = new window.events;
	</script>
</html>