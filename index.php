<html>
<head>
	<title>Mega Tic-Tac-Toe</title>
	<meta charset='utf-8'>
	<!--<meta content='Mega Tic Tac Toe'>-->
	<link href='css/style.css' rel='stylesheet' type='text/css'>
	<script type="text/javascript" src="js/game.js"></script>
	<script>
		
	</script>
</head>

<body>


	<div class="gameContainer">
	<?php 
		for($i=0; $i<9;$i++)
		{
			echo "<div class = 'big ".$i."' >";
			for($j=0; $j<9;$j++)
			{
				echo "\t <div class = 'small ".$j."' onclick='game(this)'></div>";
			}
			echo "</div>";
		}
	?>
	</div>


</body>
</html>