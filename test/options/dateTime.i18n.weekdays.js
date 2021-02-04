describe('dateTime - i18n - weekdays', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	describe('Functional tests', function () {
		dt.html('input');
		it('Default', function () {
			let el = new DateTime(document.getElementById('test'));

			$('#test').click();

			expect($('.dt-datetime-calendar thead').text()).toBe('MonTueWedThuFriSatSun');
		});

		dt.html('input');
		it('Change', function () {
			let el = new DateTime(document.getElementById('test'), {
				i18n: {
					weekdays: ['1', '2', '3', '4', '5', '6', '7']
				}
			});

			$('#test').click();

			expect($('.dt-datetime-calendar thead').text()).toBe('2345671');
		});
	});
});
