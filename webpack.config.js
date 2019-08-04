var path = require('path');
	
module.exports = {
	entry: "./app/js/app.js",
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "app.js",
	}
}