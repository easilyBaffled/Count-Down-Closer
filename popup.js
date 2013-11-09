var i = 0;

function start(){
	var x = Number(i);
    chrome.extension.sendMessage({ 'text': x.toString() });
}

function add(){
	i++;
	document.getElementById('box').value=i;
}
function sub(){
	i--;
	document.getElementById('box').value=i;
}
document.getElementById('add').onclick = add;
document.getElementById('sub').onclick = sub;
document.getElementById('button').onclick = start;
