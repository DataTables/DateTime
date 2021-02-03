describe('dateTime - i18n - previous', function () {
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

			// expect($('.dt-datetime-month').text()).toBe(
			// 	'JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember'
			// );
		});

		dt.html('input');
		it('Change', function () {
			let el = new DateTime(document.getElementById('test'), {
				i18n: {
					previous: 'test'
				}
			});

			$('#test').click();

			// expect($('.dt-datetime-month').text()).toBe('123456789101112');
		});
	});
});
