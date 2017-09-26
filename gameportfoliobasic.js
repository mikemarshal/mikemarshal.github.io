var whichswitch = 0;

// eye switches on front page //
function changeEyes1(){
document.getElementById("game1").style.zIndex = "-1";
}
function revertEyes1(){
document.getElementById("game1").style.zIndex = "-3";
}
function changeEyes2(){
document.getElementById("game2").style.zIndex = "-1";
}
function revertEyes2(){
document.getElementById("game2").style.zIndex = "-3";
}
function changeEyes3(){
document.getElementById("game3").style.zIndex = "-1";
}
function revertEyes3(){
document.getElementById("game3").style.zIndex = "-3";
}
function changeEyes4(){
document.getElementById("game4").style.zIndex = "-1";
}
function revertEyes4(){
document.getElementById("game4").style.zIndex = "-3";
}
function changeEyes5(){
document.getElementById("game5").style.zIndex = "-1";
}
function revertEyes5(){
document.getElementById("game5").style.zIndex = "-3";
}
// end eye switches //

// which button clicked //
function clickedupdog(){
whichswitch = 1;
setTimeout(clickme, 160);
}
function clickedthisisit(){
whichswitch = 2;
setTimeout(clickme, 160);
}
// end which button clicked //


function clickme(){
setTimeout(clickmetimer1, 160);
document.getElementById("bgr").style.height = "1500px";
document.getElementById("chunk").style.display = 'none';
document.getElementById("eyesclicked").style.zIndex = "-1";
document.getElementById("bgr").style.backgroundImage = "url('images/expandimages/gentleman_expand1.png')";
}
function clickmetimer1(){
setTimeout(clickmetimer2, 160);
document.getElementById("bgr").style.backgroundImage = "url('images/expandimages/gentleman_expand2.png')";
}
function clickmetimer2(){
setTimeout(clickmetimer3, 160);
document.getElementById("bgr").style.backgroundImage = "url('images/expandimages/gentleman_expand3.png')";
}
function clickmetimer3(){
setTimeout(clickmetimer8, 160);
document.getElementById("bgr").style.backgroundImage = "url('images/expandimages/gentleman_expand4.png')";
}
function clickmetimer8(){
document.getElementById("bgr").style.backgroundImage = "url('images/expandimages/gentleman_expand9.png')";
	if (whichswitch == 1) {
	document.getElementById("showcase").style.display = 'initial';
	document.getElementById("showcasebottom").style.display = 'initial';
	}
	else if (whichswitch == 2) {
	document.getElementById("thisisit").style.display = 'initial';
	document.getElementById("showcasebottom").style.display = 'initial';
	}
}
// reverse functions //
function clickmereverse(){
	if (whichswitch == 1) {
	setTimeout(clickmetimer1reverse, 160);
	document.getElementById("showcase").style.display = 'none';
	document.getElementById("showcasebottom").style.display = 'none';
	}
	else if (whichswitch == 2) {
	setTimeout(clickmetimer1reverse, 160);
	document.getElementById("thisisit").style.display = 'none';
	document.getElementById("showcasebottom").style.display = 'none';
	}
}
function clickmetimer1reverse(){
setTimeout(clickmetimer2reverse, 160);
document.getElementById("bgr").style.backgroundImage = "url('images/expandimages/gentleman_expand4.png')";
}
function clickmetimer2reverse(){
setTimeout(clickmetimer3reverse, 160);
document.getElementById("bgr").style.backgroundImage = "url('images/expandimages/gentleman_expand3.png')";
}
function clickmetimer3reverse(){
setTimeout(clickmetimer4reverse, 160);
document.getElementById("bgr").style.backgroundImage = "url('images/expandimages/gentleman_expand2.png')";
}
function clickmetimer4reverse(){
setTimeout(clickmetimer5reverse, 160);
document.getElementById("bgr").style.backgroundImage = "url('images/expandimages/gentleman_expand1.png')";
document.getElementById("bgr").style.height = "700px";
document.getElementById("chunk").style.display = 'initial';
}
function clickmetimer5reverse(){
document.getElementById("bgr").style.backgroundImage = "url('images/gentleman_animated.gif')";
document.getElementById("eyesclicked").style.zIndex = "-10";
}
// end reverse functions //


function clickmetimer(){
document.getElementById("showcase").style.display = 'initial';
}
