let num = 0;
let clickNum = document.getElementById('my-btn');

clickNum.onclick = function(){
	num++;
	alert('You click ' + num +' times');
	document.getElementById('num-of-clicks').innerHTML = num;
};

