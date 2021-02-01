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
			new DateTime(document.getElementById('test'), {});
			$('#test').click();
			checkDays([false, false, false, false, false, false, false]);
			expect($('.dt-datetime-date tbody td.disabled').length).toBe(0);
		});

		dt.html('input');
		it('Array', function () {
			// DD-1854 - have to specify first day
			new DateTime(document.getElementById('test'), {firstDay: 0, disableDays: [1, 2]});
			$('#test').click();
			checkDays([false, true, true, false, false, false, false]);
			expect($('.dt-datetime-date tbody td.disabled').length).toBeGreaterThan(7);
		});

		dt.html('input');
		it('Function', function () {
			let i = 0;
			// DD-1854 - have to specify first day
			new DateTime(document.getElementById('test'), {
				firstDay: 0,
				disableDays: function (day) {
					i++;
					return i === 11 || i === 12 ? true : false;
				}
			});
			$('#test').click();
			checkDays([false, false, false, true, true, false, false, false, false]);
			expect($('.dt-datetime-date tbody td.disabled').length).toBe(2);
		});
	});
});
