describe('GenderFilter', function () {
	var $filter;

	beforeEach(module('root'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should filter out based on gender', function () {
		var list = [{
			name: 'john doe',
			gender: 'male'
		}, {
			name: 'sarah smith',
			gender: 'female'
		}];

		var result = $filter('gender')(list, 'male');
		expect(result.length).toBe(1);
		expect(result[0].name).toEqual('john doe');
	});
});
