var nudity = require('../index');

if (process.argv.length != 3) {
	console.log('Usage: node test.js [image]');
	process.exit(1);
}

var imagePath = process.argv[2];

nudity.scan(imagePath, function(err, result) {
	console.log(result + ' = ' + imagePath);
});