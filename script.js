//


let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

for (let i=0; i<64; i++) {
	let excel = document.createElement('div');
	field.appendChild(excel);
	excel.classList.add('excel');

}

let excel = document.getElementsByClassName('excel');
let x=1, y=8;
for(let i=0; i<excel.length; i++){
	if (x>8) {
		x=1;
		y--;
	}
	excel[i].setAttribute('postX', x);
	excel[i].setAttribute('postY', y);
	x++;
	if ((i % 2 == 0 && y % 2 == 0) || (i % 2 != 0 && y % 2 != 0)){
		excel[i].style.backgroundColor = "rgb(255,248,220)";
	} else{
		excel[i].style.backgroundColor = "brown";
	}
}

//
let a = Math.round(Math.random()*63);
excel[a].classList.add('current');
excel[a].classList.add('set');
var step = 1; 
excel[a].innerHTML = step;

let currentX = excel[a].getAttribute('postX');
let currentY = excel[a].getAttribute('postY');

 function nextStep() {
	let vars = [
	document.querySelector('[postX="' + ( + currentX + 1 ) + '"][postY="' + ( + currentY + 2 ) + '"]'),
	document.querySelector('[postX="' + ( + currentX + 2 ) + '"][postY="' + ( + currentY + 1 ) + '"]'),
	document.querySelector('[postX="' + ( + currentX + 2 ) + '"][postY="' + ( + currentY - 1 ) + '"]'),
	document.querySelector('[postX="' + ( + currentX + 1 ) + '"][postY="' + ( + currentY - 2 ) + '"]'),
	document.querySelector('[postX="' + ( + currentX - 1 ) + '"][postY="' + ( + currentY - 2 ) + '"]'),
	document.querySelector('[postX="' + ( + currentX - 2 ) + '"][postY="' + ( + currentY - 1 ) + '"]'),
	document.querySelector('[postX="' + ( + currentX - 2 ) + '"][postY="' + ( + currentY + 1 ) + '"]'),
	document.querySelector('[postX="' + ( + currentX - 1 ) + '"][postY="' + ( + currentY + 2 ) + '"]')
	];


	for (let i=vars.length-1; i>=0; i--) {
		if (!vars[i] || vars[i].classList.contains('set')) {
			vars.splice(i,1);
		}
	}

let nextArr = [];

function whatToDoNext(){
	for (let i = 0; i < vars.length; i++) {
		let nextX = vars[i].getAttribute('postX');
		let nextY = vars[i].getAttribute('postY');	
		let nextVars = 	[
	document.querySelector('[postX="' + ( + nextX + 1) + '"][postY="' + ( + nextY + 2 ) + '"]'),
	document.querySelector('[postX="' + ( + nextX + 2 ) + '"][postY="' + ( + nextY + 1 ) + '"]'),
	document.querySelector('[postX="' + ( + nextX + 2 ) + '"][postY="' + ( + nextY - 1 ) + '"]'),
	document.querySelector('[postX="' + ( + nextX + 1 ) + '"][postY="' + ( + nextY - 2 ) + '"]'),
	document.querySelector('[postX="' + ( + nextX - 1 ) + '"][postY="' + ( + nextY - 2 ) + '"]'),
	document.querySelector('[postX="' + ( + nextX - 2 ) + '"][postY="' + ( + nextY - 1 ) + '"]'),
	document.querySelector('[postX="' + ( + nextX - 2 ) + '"][postY="' + ( + nextY + 1 ) + '"]'),
	document.querySelector('[postX="' + ( + nextX - 1 ) + '"][postY="' + ( + nextY + 2 ) + '"]')
	];

	for (let i=nextVars.length-1; i>=0; i--) {
		if (!nextVars[i] || nextVars[i].classList.contains('set')) {
			nextVars.splice(i,1);
		}
	}

	nextArr.push(nextVars.length);
	}
	return nextArr;
}

	nextArr = whatToDoNext();


let k = nextArr.length;
let min = nextArr[0];
var index = 0;

while (k--){
	if (nextArr[k] < min) {
		min = nextArr[k];
		index = k ;
	}
}
 step++;
document.querySelector('.current').classList.remove('current');

vars[index].classList.add('current');
vars[index].classList.add('set');
vars[index].innerHTML = step;
currentX = vars[index].getAttribute('postX');
currentY = vars[index].getAttribute('postY');




if (step == 64) {
	clearInterval(interval);
}

 }

let interval = setInterval(() =>{
	nextStep();
}, 800);
  
















