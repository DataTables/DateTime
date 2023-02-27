describe('dateTime - options - disableDays', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	let table;

	function checkDays(expected) {
		for (i in expected) {
			expect($('.dt-datetime-date tbody tr:eq(1) td:eq(' + i + ')').hasClass('disabled')).toBe(expected[i]);
		}
	}

	describe('Functional tests', function () {
		dt.html('input');
		it('Default - all enabled', function () {
			new DateTime(document.getElementById('value'), {});
			$('#value').click();
			checkDays([false, false, false, false, false, false, false]);
			expect($('.dt-datetime-date tbody td.disabled').length).toBe(0);
		});

		dt.html('input');
		it('Array', function () {
			new DateTime(document.getElementById('value'), {
				disableDays: [1, 2]
			});
			$('#value').click();
			checkDays([true, true, false, false, false, false, false]);
			expect($('.dt-datetime-date tbody td.disabled').length).toBeGreaterThan(7);
		});

		dt.html('input');
		it('Function', function () {
			new DateTime(document.getElementById('value'), {
				disableDays: function (day) {
					return day.toUTCString().match(/0\d Oct/)? true : false;
				}
			});
			$('#value').click();
			checkDays([true, true, true, true, true, true, false]);
			expect($('.dt-datetime-date tbody td.disabled').length).toBe(9);
		});
	});
});
