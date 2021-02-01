describe('dateTime - options - showWeekNumber', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	describe('Functional tests', function () {
		dt.html('input');
		it('Default: no week number', function () {
			let el = new DateTime(document.getElementById('test'));

			$('#test').click();

			el.val('2017-06-15');

			expect($('td.dt-datetime-week').length).toBe(0);
		});

		dt.html('input');
		it('Show week number', function () {
			let el = new DateTime(document.getElementById('test'), {
				showWeekNumber: true
			});

			$('#test').click();

			el.val('2017-06-15');

			expect($('td.dt-datetime-week').length).toBe(5);
		});
		it('... correct week number', function () {
			expect($('td.dt-datetime-week:eq(0)').text()).toBe('22');

		});
	});
});
