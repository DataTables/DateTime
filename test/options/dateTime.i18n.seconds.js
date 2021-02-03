describe('dateTime - i18n - seconds', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	describe('Functional tests', function () {
		dt.html('input');
		it('Default', function () {
			let el = new DateTime(document.getElementById('test'), {
				format: 'HH:mm:ss'
			});

			$('#test').click();

			expect($('.dt-datetime-seconds thead').text()).toBe('Second');
		});

		dt.html('input');
		it('Change', function () {
			let el = new DateTime(document.getElementById('test'), {
				format: 'HH:mm:ss',
				i18n: {
					seconds: 'test'
				}
			});

			$('#test').click();

			expect($('.dt-datetime-seconds thead').text()).toBe('test');
		});
	});
});
