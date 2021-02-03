describe('dateTime - i18n - months', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	describe('Functional tests', function () {
		dt.html('input');
		it('Default', function () {
			let el = new DateTime(document.getElementById('test'));

			$('#test').click();

			expect($('.dt-datetime-month').text()).toBe(
				'JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember'
			);
		});

		dt.html('input');
		it('Change', function () {
			let el = new DateTime(document.getElementById('test'), {
				format: 'HH:mm',
				i18n: {
					months: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
				}
			});

			$('#test').click();

			expect($('.dt-datetime-month').text()).toBe('123456789101112');
		});
	});
});
