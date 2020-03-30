const field = document.querySelector('#field');
const array = [];
const copyArray = [];

function draw(columns, rows) {

	for (let i = 0, k = 0; i < rows; i++) {
		const tr = document.createElement('tr');
		field.appendChild(tr);
		for (let j = 0; j < columns; j++) {
			const td = document.createElement('td');
			tr.appendChild(td);
			td.id = k;
			k++;
		}
	}

	for (let i = 0; i < columns*rows; i++) {
		array.push(0);
	};

}

draw(10, 10);

field.querySelectorAll('td').forEach(function(el) {
	el.addEventListener('click', function() {
		if (this.style.background === 'black') {
			this.style.background = 'none'
			array[this.id] = 0;
			console.log(array);
		} 
		else {
			this.style.background = 'black';
			array[this.id] = 1;
			console.log(array);
		}
	})
});

clear.onclick = function() {
	field.querySelectorAll('td').forEach(function(el) {
		el.style.background = 'none';
		copyArray[el.id] = array[el.id];
		array[el.id] = 0;

	});
		console.log(array);
		console.log(copyArray);
}

restore.onclick = function() {
	field.querySelectorAll('td').forEach(function(el) {
		if (copyArray[el.id] === 1) {
			array[el.id] = copyArray[el.id];
			el.style.background = 'black';
		}	
	});
}