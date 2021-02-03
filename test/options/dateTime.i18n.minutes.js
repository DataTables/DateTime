describe('dateTime - i18n - minutes', function () {
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

			expect($('.dt-datetime-minutes thead').text()).toBe('Minute');
		});

		dt.html('input');
		it('Change', function () {
			let el = new DateTime(document.getElementById('test'), {
				format: 'HH:mm',
				i18n: {
					minutes: 'test'
				}
			});

			$('#test').click();

			expect($('.dt-datetime-minutes thead').text()).toBe('test');
		});
	});
});
