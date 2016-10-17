const times = [1000, 10000, 100000, 1000000, 5000000];
let x = 0;

Date.prototype.subtract = function(days) {
	return new Date(this.setDate(this.getDate() - x));
}

for(i in times) {
	console.time('monkeypatch ' + times[i]);

	while (x < times[i]) {
		x++;
		let date = new Date().subtract(2);
	}

	console.timeEnd('monkeypatch ' + times[i]);
	x = 0;
}
