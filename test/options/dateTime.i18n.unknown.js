describe('dateTime - i18n - unknown', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	// DD-1870
	describe('Functional tests', function () {
		dt.html('input');
		// it('Default', function () {
		// 	let el = new DateTime(document.getElementById('test'), {
		// 		format: 'HH:mm:ss'
		// 	});

		// 	$('#test').click();

		// 	expect($('.dt-datetime-seconds thead').text()).toBe('Second');
		// });

		// dt.html('input');
		// it('Change', function () {
		// 	let el = new DateTime(document.getElementById('test'), {
		// 		i18n: {
		// 			unknown: 'test'
		// 		}
		// 	});

		// 	$('#test').click();

		// 	expect($('.dt-datetime-seconds thead').text()).toBe('test');
		// });
	});
});
