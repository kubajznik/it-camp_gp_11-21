let player = {
	top: 0,
	left: 0,
	}
$(document).ready(function(){
	console.log("starting");
		setStartPosition(720, 20);					/* Startpositionen auf verschiedenen Maps verändern */
		$(document).on('keydown',function(e){
			console.log(e.code);
			switch(e.code){
				case "KeyD":
					player.left = player.left + 15;
					break;
				case "KeyA":
					 player.left = player.left - 15;
					break; 
				case "KeyW":
					jump();
					break;
				case "Space":
					highjump();
					break;
				default:
					console.log(e.code);	
					}
				playermove()
			});
});


function checkplayermap2(){
}
function highjump(){
	$('#player').addClass("animate2");
	window.setTimeout(function(){
		$('#player').removeClass("animate2");
	},500);
}
function jump(){
	$('#player').addClass("animate");
	window.setTimeout(function(){
		$('#player').removeClass("animate");
	},300);
}
function playermove(){
	$('#player')
	.css('margin-top', player.top)
	.css('margin-left', player.left);
}

function setStartPosition(top, left){
player.top = top;
player.left = left;
playermove ();
}