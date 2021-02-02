describe('dateTime - api - hide()', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	let el;

	describe('Check the defaults', function () {
		dt.html('input');
		it('Ensure its a function', function () {
			el = new DateTime(document.getElementById('test'));
			expect(typeof el.hide).toBe('function');
		});
		it('Returns an API instance', function () {
			expect(el.hide('test') instanceof DateTime).toBe(true);
		});
	});

	// DD-1865/1866 not clear what this should do so stopping here
	describe('Functional tests', function () {
		dt.html('input');
		it('Hide when picker closed', function () {
			el = new DateTime(document.getElementById('test'), {});
			el.hide();

			// expect($('#test').attr('autocomplete')).toBe(undefined);
		});
		// it('... date picker cant be opened', function () {
		// 	$('#test').click();
		// 	expect($('.dt-datetime').length).toBe(0);
		// });

		// dt.html('input');
		// it('Hide when picker open', function () {
		// 	el = new DateTime(document.getElementById('test'), {});
		// 	$('#test').click();

		// 	expect($('.dt-datetime').length).toBe(1);

		// 	el.hide();

		// 	expect($('.dt-datetime').length).toBe(0);
		// });
		// it('... date picker cant be opened', function () {
		// 	$('#test').click();
		// 	expect($('.dt-datetime').length).toBe(0);
		// });
	});
});