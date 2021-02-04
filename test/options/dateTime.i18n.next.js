describe('dateTime - i18n - next', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	// DD-1869
	describe('Functional tests', function () {
		dt.html('input');
		it('Default', function () {
			let el = new DateTime(document.getElementById('test'));

			$('#test').click();

			expect($('.dt-datetime-iconRight').text()).toBe('Next');
		});

		dt.html('input');
		it('Change', function () {
			let el = new DateTime(document.getElementById('test'), {
				i18n: {
					next: 'test'
				}
			});

			$('#test').click();

			expect($('.dt-datetime-iconRight').text()).toBe('test');
		});
	});
});
