function ChangeStyle()
{
document.getElementById("btn_click2").style.color="blue";
document.getElementById("btn_click2").style.fontFamily="Arial";
document.getElementById("btn_click2").style.fontSize="larger";
document.getElementById("btn_click2").style.background="pink";
document.getElementById("btn_click1").style.color="blue";
document.getElementById("btn_click1").style.fontFamily="Arial";
document.getElementById("btn_click1").style.fontSize="larger";
document.getElementById("btn_click1").style.background="pink";
document.getElementById("btn_click3").style.color="blue";
document.getElementById("btn_click3").style.fontFamily="Arial";
document.getElementById("btn_click3").style.fontSize="larger";
document.getElementById("btn_click3").style.background="pink";


}

function ChangeSt() 
{ 
	window.location = 'http://www.google.com'; 
}

function removeDummy() {
 	var elem = document.getElementById('Clear');
 	elem.parentNode.removeChild(elem);
 	document.getElementById("FlexBox").classList.remove('hidden');
}