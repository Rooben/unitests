function Gender() {
	return function (value, gender) {
		if (!gender) return value;

		return value.filter(function (item) {
			return item.gender === gender;
		});
	}
}

angular
	.module('root')
	.filter('gender', Gender);
