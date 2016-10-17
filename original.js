const times = [1000, 10000, 100000, 1000000, 5000000];
let x = 0;

for(i in times) {
	console.time('original ' + times[i]);

	while (x < times[i]) {
		x++;
		let date = new Date(new Date().setDate(new Date().getDate() -2));
	}

	console.timeEnd('original ' + times[i]);
	x = 0;
}
