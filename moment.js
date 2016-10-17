const moment = require('moment');
const times = [1000, 10000, 100000, 1000000, 5000000];
let x = 0;

for(i in times) {
	console.time('moment ' + times[i]);

	while (x < times[i]) {
		x++;
		let date = moment().subtract(2, 'days').toDate();
	}

	console.timeEnd('moment ' + times[i]);
	x = 0;
}