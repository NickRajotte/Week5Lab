//this function shows the contect for the nav1 div.  It hides the rest of the content
		function changeNav1() {
		$("#nav1").show(500).addClass("contentBox"); //puts nav 1 info into the contentbox at a speed of 500 ms
		$("#nav2").hide(500);//hides nav2 info at a speed of 500 miliseconds
		$("#nav3").hide(500);//hides nav3 info at a speed of 500 miliseconds
		$("#nav4").hide(500);//hides nav4 info at a speed of 500 miliseconds
		
		}
		//this is calling the function that was declared above when the first link is clicked.
		$("#nav1button").on("click",changeNav1);
		
		//this is declaring the information for the link button shifting the show to nav2 and hiding nav 1
		function changeNav2() {
		$("#nav1").hide(500);//this hides link 1 content
		$("#nav2").show(500).addClass("contentBox");//this is putting nav 2 into the content box
		$("#nav3").hide(500); //this hides the nav3 content
		$("#nav4").hide(500);//this hides the nav4 content
		
		}
		//this is calling the function into use once the 2nd link button is clicked
		$("#nav2button").on("click",changeNav2);
		
		//this is declaring the function to call nav3 into the content box and hiding the rest of the information
		function changeNav3() {
		$("#nav1").hide(500);//hides nav1 stuff the 500 is miliseconds on how fast it does it
		$("#nav2").hide(500);//hides nav2 info
		$("#nav3").show(500).addClass("contentBox");//shows nav3 info in the content box.  
		$("#nav4").hide(500);//hides nav4 at a speed of 500 miliseconds
		
		}
		//this calls the function into use when the 3rd nav link is clicked
		$("#nav3button").on("click",changeNav3);
		
		//declares the function that will hide all other info expect nav4
		function changeNav4() {
		$("#nav1").hide(500);//hides nav1 info at 500 milisecond speed
		$("#nav2").hide(500);//hides nav2 info at 500 milisecond speed
		$("#nav3").hide(500);//hides nav3 info at 500 milisecond speed
		$("#nav4").show(500).addClass("contentBox");//shows nav4 info at 500 milisecond speed
		
		}
		//calls the function into use when the 4th button is clicked
		$("#nav4button").on("click",changeNav4);
		
		//this moves the buttons up 10 px when hovered over -10 makes it go up
		$("#nav li").mouseover(function(){       
		$(this).animate({marginTop: "-10px"},500);
		});
		//this moves the buttons back to its original spot when the mouse leaves the button
		$("#nav li").mouseleave(function(){       
		$(this).animate({marginTop: "0px"},500);
		});
