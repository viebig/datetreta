const times = [1000, 10000, 100000, 1000000, 5000000];
let x = 0;

for(i in times) {
	console.time('iife ' + times[i]);

	while (x < times[i]) {
		x++;
		let date = () => {
			let out = new Date();
			out.setDate(out.getDate() - 2);
			return out;
		}
		let mydate = date();
	}

	console.timeEnd('iife ' + times[i]);
	x = 0;
}