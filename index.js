/*alert("working");*/

document.querySelectorAll("img.dice")[0].addEventListener("click",diceClick);
document.querySelectorAll("img.dice")[1].addEventListener("click",diceClick);
	/*$("div#dice2").fadeOut("fast");*/

function generateRamdomNumber(){
	 return(Math.floor((Math.random() * 6) + 1));
}

let count1 = 0;
let count2 = 0;
let pcount1 = 0;
let pcount2 = 0;



function diceClick(){
	let n = generateRamdomNumber();
	const id = "#"+this.id;
	let player = id.slice(5);
	console.log(player);
	if(player == 1){
		pcount1 = count1;
		count1+=n;
		if(count1>100){
			var notify = true;
		}
		colorName1 = "color" + id.slice(5); 
		color1 = document.querySelector("#" + colorName1 ).value;
		/*console.log(color)*/
		document.querySelector(id).setAttribute("src","https://www.animatedimages.org/data/media/710/animated-dice-image-0012.gif");
		setTimeout(function(){
		document.querySelector(id).setAttribute("src","./photos/dice"+n+".jpg");
		document.getElementById(count1).style.backgroundColor = color1;
		if(pcount1!==0 && !notify){document.getElementById(pcount1).style.backgroundColor = "white";}
		setTimeout(function(){
			document.querySelectorAll(".dice")[0].classList.toggle("diceHide");
			document.querySelectorAll(".dice")[2].classList.toggle("diceHide");
			setTimeout(function(){
				if(count1 == 4){
					var p = count1;
					count1 = 25;
					document.getElementById(count1).style.backgroundColor = color1;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count1 == 13){
					var p = count1;
					count1 = 46;
					document.getElementById(count1).style.backgroundColor = color1;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count1 == 33){
					var p = count1;
					count1 = 49;
					document.getElementById(count1).style.backgroundColor = color1;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count1 == 42){
					var p = count1;
					count1 = 63;
					document.getElementById(count1).style.backgroundColor = color1;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count1 == 50){
					var p = count1;
					count1 = 69;
					document.getElementById(count1).style.backgroundColor = color1;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count1 == 62){
					var p = count1;
					count1 = 81;
					document.getElementById(count1).style.backgroundColor = color1;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count1 == 74){
					var p = count1;
					count1 = 92;
					document.getElementById(count1).style.backgroundColor = color1;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count1 == 27){
					var p = count1;
					count1 = 5;
					document.getElementById(count1).style.backgroundColor = color1;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count1 == 40){
					var p = count1;
					count1 = 3;
					document.getElementById(count1).style.backgroundColor = color1;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count1 == 43){
					var p = count1;
					count1 = 18;
					document.getElementById(count1).style.backgroundColor = color1;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count1 == 54){
					var p = count1;
					count1 = 31;
					document.getElementById(count1).style.backgroundColor = color1;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count1 == 66){
					var p = count1;
					count1 = 45;
					document.getElementById(count1).style.backgroundColor = color1;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count1 == 76){
					var p = count1;
					count1 = 58;
					document.getElementById(count1).style.backgroundColor = color1;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count1 == 99){
					var p = count1;
					count1 = 41;
					document.getElementById(count1).style.backgroundColor = color1;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count1 == 89){
					var p = count1;
					count1 = 53;
					document.getElementById(count1).style.backgroundColor = color1;
					document.getElementById(p).style.backgroundColor = "white";
				}

			},400);
		},500);
		},1000);
		if(count1>100){
			count1-=n;
		}
		
	}
	else if(player == 2){
		pcount2 = count2;
		count2+=n;
		if(count2>100){
			var notify = true;
		}
		colorName2 = "color" + id.slice(5); 
		color2 = document.querySelector("#" + colorName2 ).value;
		/*console.log(color)*/
		document.querySelector(id).setAttribute("src","https://www.animatedimages.org/data/media/710/animated-dice-image-0012.gif");
		setTimeout(function(){
		document.querySelector(id).setAttribute("src","./photos/dice"+n+".jpg");
		document.getElementById(count2).style.backgroundColor = color2;
		if(pcount2!==0 && !notify){document.getElementById(pcount2).style.backgroundColor = "white";}
		setTimeout(function(){
			document.querySelectorAll(".dice")[0].classList.toggle("diceHide");
			document.querySelectorAll(".dice")[2].classList.toggle("diceHide");
			setTimeout(function(){
				if(count2 == 4){
					var p = count2;
					count2 = 25;
					document.getElementById(count2).style.backgroundColor = color2;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count2 == 13){
					var p = count2;
					count2 = 46;
					document.getElementById(count2).style.backgroundColor = color2;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count2 == 33){
					var p = count2;
					count2 = 49;
					document.getElementById(count2).style.backgroundColor = color2;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count2 == 42){
					var p = count2;
					count2 = 63;
					document.getElementById(count2).style.backgroundColor = color2;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count2 == 50){
					var p = count2;
					count2 = 69;
					document.getElementById(count2).style.backgroundColor = color2;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count2 == 62){
					var p = count2;
					count2 = 81;
					document.getElementById(count2).style.backgroundColor = color2;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count2 == 74){
					var p = count2;
					count2 = 92;
					document.getElementById(count2).style.backgroundColor = color2;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count2 == 27){
					var p = count2;
					count2 = 5;
					document.getElementById(count2).style.backgroundColor = color2;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count2 == 40){
					var p = count2;
					count2 = 3;
					document.getElementById(count2).style.backgroundColor = color2;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count2 == 43){
					var p = count2;
					count2 = 18;
					document.getElementById(count2).style.backgroundColor = color2;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count2 == 54){
					var p = count2;
					count2 = 31;
					document.getElementById(count2).style.backgroundColor = color2;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count2 == 66){
					var p = count2;
					count2 = 45;
					document.getElementById(count2).style.backgroundColor = color2;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count2 == 76){
					var p = count2;
					count2 = 58;
					document.getElementById(count2).style.backgroundColor = color2;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count2 == 99){
					var p = count2;
					count2 = 41;
					document.getElementById(count2).style.backgroundColor = color2;
					document.getElementById(p).style.backgroundColor = "white";
				}
				if(count2 == 89){
					var p = count2;
					count2 = 53;
					document.getElementById(count2).style.backgroundColor = color2;
					document.getElementById(p).style.backgroundColor = "white";
				}

			},400);
		},500);
		},1000);
		if(count2>100){
			count2-=n;
		}
		
	}

	setTimeout(function(){
		if(count1 == 100 || count2 == 100){
			alert("Hurray\n!!" + player + "won");
			setTimeout(function(){
				location.reload();
			},3000);
		}
	},2000);
	
	
}


document.querySelector("#start").addEventListener("click",function(){
	const name1 = document.querySelector("#name1").value;
	const name2 = document.querySelector("#name2").value;
	const color1 = document.querySelector("#color1").value;
	const color2 = document.querySelector("#color2").value;
	/*if(name1 === "" || name2 === ""){
		if (color1 === color1){
			alert("Please Enter player name for players and choose distint colors to continue");
			location.reload();
		}
	}
	else if (color1 === color2){
		alert("Please Enter player name for players and choose distint colors to continue");
		location.reload();
	}*/
	document.querySelector("#pawn1").innerHTML = " &#9823; <br> " + name1 ;
	document.querySelector("#pawn2").innerHTML = " &#9823; <br> " + name2 ;
	document.querySelector("#pawn1").style.color = color1;
	document.querySelector("#pawn2").style.color = color2;
	document.querySelectorAll(".dice")[0].classList.remove("diceHide");
	/*document.querySelectorAll(".dice")[2].classList.remove("diceHide");*/

});






