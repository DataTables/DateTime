describe('dateTime - i18n - amPm', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	describe('Functional tests', function () {
		dt.html('input');
		it('Default', function () {
			let el = new DateTime(document.getElementById('test'), {
				format: 'HH:mm A'
			});

			$('#test').click();

			expect($('.dt-datetime-hours tbody tr:first-child td:last-child').text()).toBe('am');
			expect($('.dt-datetime-hours tbody tr:last-child td:last-child').text()).toBe('pm');
		});

		dt.html('input');
		it('Change', function () {
			let el = new DateTime(document.getElementById('test'), {
				format: 'HH:mm A',
				i18n: {
					amPm: ['before', 'after']
				}
			});

			$('#test').click();

			expect($('.dt-datetime-hours tbody tr:first-child td:last-child').text()).toBe('before');
			expect($('.dt-datetime-hours tbody tr:last-child td:last-child').text()).toBe('after');
		});
	});
});
