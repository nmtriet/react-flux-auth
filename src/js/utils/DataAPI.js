var SampleData = require('../data/SampleData');

module.exports = {
	getData: function(email, password) {
		var data = JSON.parse(SampleData.init());
		for (var i = data.length - 1; i >= 0; i--) {
			if (email == data[i]['email'] && password == data[i]['password']) {
				return data[i];
			}
		};
		return false;
	}
};