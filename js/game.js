		x=0;
		var posBig='';
		//var finishedBoxes=Array();
		function game(id)
		{

			//checks whether players are re-directing each other through their turns
			check='big ';
			check=check.concat(posBig.toString());
			pos=parseInt(posBig)+1;
			
			if(id.parentNode.style.borderColor=='red')
			{
				alert("Bro, don't try to cheat. This block is already won.");
				return ;
			}	

			if(id.parentNode.className.indexOf(check)<0)
			{
				if(document.getElementsByClassName(check)[0].style.borderColor=='red')
				{
					posBig='';
					id.click();
					return;
				}
				document.getElementsByClassName(check)[0].style.borderColor='cyan';
				alert('Play in Block No ' + pos.toString());
				return;
			}


			//to check if finishedBoxes are not activated again for playing	
			if(document.getElementsByClassName(check)[0].style.borderColor!='red')
				document.getElementsByClassName(check)[0].style.borderColor='black';
		

			turn='';
			if(id.innerHTML=='X' || id.innerHTML=='O')
			{
				alert('Do not try to overwrite.. Play your turn again..');
				return;	
			}
			x++;
			if(x%2==0)
			{
				id.innerHTML='X';
				turn='X';
			}
			else
			{
				id.innerHTML='O';
				turn='O';
			}
			


			//checks for winner of small ttt
			flag=0;
			//copy_posBig=posBig;
			data=id.parentNode.children;
			for (var i = 0; i < 9; i++) {
				if(data[i]==id){
					posBig=i;
					break;
				}
			}
			for(i=0;i<7;i+=3)
			{
				if(data[i].innerHTML==data[i+1].innerHTML && data[i+1].innerHTML==data[i+2].innerHTML && data[i].innerHTML!='')
				{flag=1;}
			}
			for(i=0;i<3;i++)
			{
				if(data[i].innerHTML==data[i+3].innerHTML && data[i+3].innerHTML==data[i+6].innerHTML && data[i].innerHTML!='')
				{flag=1;}
			}
			for(i=0;i<3;i+=2)
			{
				if(data[i].innerHTML==data[4].innerHTML && data[4].innerHTML==data[8-i].innerHTML && data[i].innerHTML!='')
				{flag=1;}
			}
			if(flag)
			{
				//for(i=0;i<18;i++)
				//	id.parentNode.removeChild(id.parentNode.firstChild);
				
				//t=document.createTextNode(turn);
				//id.parentNode.appendChild(t);
				id.parentNode.style.opacity=0.5;
				id.parentNode.style.cursor='default';
				id.parentNode.style.borderColor='red';
				id.parentNode.style.borderWidth='1.5px';
				var tem=0;
				tem=id.parentNode.children;
				for(i=0;i<tem.length;i++)
				{
					tem[i].className='smallAfter';
				}
				if(turn=='O')
					id.parentNode.style.backgroundImage='url("images/Zero.png")';

				else
					id.parentNode.style.backgroundImage='url("images/Kata.png")';
				
				//finishedBoxes.push(copy_posBig);
			}

			
			

			
			//checks for winner of big ttt
			var flag=0;
			var bigdata = id.parentNode.parentNode.children;
			//var zero="url(http://localhost/TicTacToe/images/Zero.png)";
			//var Kata="url(http://localhost/TicTacToe/images/Kata.png)";
			for(i=0;i<7;i+=3)
			{
				if(bigdata[i].style.backgroundImage==bigdata[i+1].style.backgroundImage && bigdata[i+1].style.backgroundImage==bigdata[i+2].style.backgroundImage && bigdata[i].style.backgroundImage!='')
				{flag=1;}
			}
			for(i=0;i<3;i++)
			{
				if(bigdata[i].style.backgroundImage==bigdata[i+3].style.backgroundImage && bigdata[i+3].style.backgroundImage==bigdata[i+6].style.backgroundImage && bigdata[i].style.backgroundImage!='')				{flag=1;}
			}
			for(i=0;i<3;i+=2)
			{
				if(bigdata[i].style.backgroundImage==bigdata[4].style.backgroundImage && bigdata[4].style.backgroundImage==bigdata[8-i].style.backgroundImage && bigdata[i].style.backgroundImage!='')
				{flag=1;}
			}
			
			if(flag)
			{
				//for(i=0;i<18;i++)
				//	id.parentNode.removeChild(id.parentNode.firstChild);
				
				//t=document.createTextNode(turn);
				//id.parentNode.appendChild(t);
				
			
					if(turn=='O')
					alert("O wins the game!");
				else
					alert("X wins the game!");
				location.href='http://localhost/TicTacToe/index.php';
			}

		}
