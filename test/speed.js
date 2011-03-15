(function() {

	var date1 = new Date(2010, 2, 6, 15, 25, 50, 125),
		date2 = new Date(1000),
		rt1 = 1000 * 60 * 60 * 24 * 365 * 5,
		rt2 = 1000 * 30;

	JSLitmus.test('_.relativeTime(1000 * 30)', function() {
		return _.relativeTime(rt2);
	});

	JSLitmus.test('_.relativeTime(1000 * 60 * 60 * 24 * 365 * 5)', function() {
		return _.relativeTime(rt1);
	});

	JSLitmus.test('_.msApart(1000)', function() {
		return _.msApart(1000);
	});

	JSLitmus.test('_.msApart(date1, date2)', function() {
		return _.msApart(date1, date2);
	});

	JSLitmus.test('_.msApart(date1, 1000)', function() {
		return _.msApart(date1, 1000);
	});

	JSLitmus.test('_.msApart(1000, 1000)', function() {
		return _.msApart(1000, 1000);
	});
    
	JSLitmus.test('_.date(date1)', function() {
		return _.date(date1);
	});
	JSLitmus.test('_.date([2010, 2, 6, 15, 25, 50, 125])', function() {
		return _.date([2010, 2, 6, 15, 25, 50, 125]);
	});
	JSLitmus.test('_.date(100000)', function() {
		return _.date(100000);
	});
	JSLitmus.test('_.date("Mon, 25 Dec 1995 13:30:00 GMT")', function() {
		return _.date("Mon, 25 Dec 1995 13:30:00 GMT");
	});
	JSLitmus.test('_.date()', function() {
		return _.date();
	});
})();