describe('dateTime - i18n - hours', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	describe('Functional tests', function () {
		dt.html('input');
		it('Default', function () {
			let el = new DateTime(document.getElementById('test'), {
				format: 'HH:mm'
			});

			$('#test').click();

			expect($('.dt-datetime-hours thead').text()).toBe('Hour');
		});

		dt.html('input');
		it('Change', function () {
			let el = new DateTime(document.getElementById('test'), {
				format: 'HH:mm',
				i18n: {
					hours: 'test'
				}
			});

			$('#test').click();

			expect($('.dt-datetime-hours thead').text()).toBe('test');
		});
	});
});
