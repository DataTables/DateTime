describe('dateTime - api - destroy()', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	let el;

	describe('Check the defaults', function () {
		dt.html('input');
		it('Ensure its a function', function () {
			el = new DateTime(document.getElementById('test'));
			expect(typeof el.destroy).toBe('function');
		});
		it('Return value', function () {
			expect(el.destroy()).toBe(undefined);
		});
	});

	describe('Functional tests', function () {
		dt.html('input');
		it('Destroy when picker closed', function () {
			el = new DateTime(document.getElementById('test'), {});
			el.destroy();

			expect($('#test').attr('autocomplete')).toBe(undefined);
		});
		it('... date picker cant be opened', function () {
			$('#test').click();
			expect($('div.dt-datetime').length).toBe(0);
		});

		dt.html('input');
		it('Destroy when picker open', function () {
			el = new DateTime(document.getElementById('test'), {});
			$('#test').click();

			expect($('div.dt-datetime').length).toBe(1);

			el.destroy();

			expect($('div.dt-datetime').length).toBe(0);
		});
		it('... date picker cant be opened', function () {
			$('#test').click();
			expect($('div.dt-datetime').length).toBe(0);
		});
	});
});
