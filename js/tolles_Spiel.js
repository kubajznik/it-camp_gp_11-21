let player = {
	top: 0,
	left: 0,
	}



$(document).ready(function(){
		setStartPosition(500, 500);
		$(document).on('keydown',function(e){
			console.log(e.code);
			switch(e.code){
				case "KeyD":
					player.left = player.left + 5;
					break;
				case "KeyA":
					 player.left = player.left - 5;
					break;
				case "KeyW":
					jump();
					break;
				default:
					console.log("Falsche Taste")
					}
				playermove()
			});
});


function checkplayermap2(){
}
function jump(){
	var i = 0;
	moveUp(i);
	/*for (let j = 0; j < 10; j++){
		 
		 playermove()
		 l
	}
	for (let d = 0; d < 10; d++){
		player.top = player.top + 1;
		playermove()
	}*/
	
}

function moveUp(i) {
	player.top = player.top - 1; 
	i++;
	if(i<50) window.setTimeout(moveUp, 500);
	/* Code ..... */
}

function playermove(){
	$('#player1')	// hier muss noch die div ID des players noch eingefügt werden
	.css('margin-top', player.top)
	.css('margin-left', player.left);
}

function setStartPosition(top, left){
player.top = top;
player.left = left;
playermove ();
}





/////////////////////////////////////////////////////////////////////////////////////////




$(document).ready(function(){
var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var leftPressed = false;
	var rightPressed = false;
	var jumpPressed = false;
	var jumpCount = 0;
	var jumpLength = 50;
  var jumpHeight = 0;
  
	var x = canvas.width/2;
	var y = canvas.height-35;
	var playerHeight = 50;
	var playerWidth = 50;
	var paddleX = (canvas.width-playerWidth)/2;

	document.addEventListener("keydown", keyRightHandler, false);
	document.addEventListener("keyup", keyLeftHandler, false);

	function keyRightHandler(e){
		if(e.keyCode == 39){
			rightPressed = true;
		}
		if(e.keyCode == 37){
			leftPressed = true;
		}
		if(e.keyCode == 38){
		  jumpPressed = true;
		}
    
	}

	function keyLeftHandler(e){
		if(e.keyCode == 39){
			rightPressed = false;
		}
		if(e.keyCode == 37){
			leftPressed = false;
		}
	}


function image() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-playerHeight-jumpHeight,  playerWidth, playerHeight);
  ctx.createPattern('Mario.png', "no-repeat");
  ctx.fillStyle = "pattern";
  ctx.fill();
  ctx.closePath();
}

/*
function earth(){
	ctx.beginPath();
	ctx.rect(0, 450, 700, 50);
	ctx.fillStyle = "green";
	ctx.fill();
	ctx.closePath();
}
*/


function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(rightPressed && paddleX < canvas.width-playerWidth){
		paddleX += 7;
	}
	else if(leftPressed && paddleX > 0){
		paddleX -= 7;
	}
	if(jumpPressed){
    jumpCount++;
    jumpHeight = 4*jumpLength*Math.sin(Math.PI*jumpCount/jumpLength);
  }
	if(jumpCount>jumpLength){
    jumpCount=0;
    jumpPressed=false;
    jumpHeight=0;
	}
  
	image();

}
setInterval(draw, 10);
});
