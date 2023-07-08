describe('dateTime - api - display()', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	let el;

	describe('Check the defaults', function () {
		dt.html('input');
		it('Ensure its a function', function () {
			el = new DateTime(document.getElementById('test'));
			expect(typeof el.display).toBe('function');
		});
		it('Getter returns an object with todays date', function () {
			const d = new Date();

			$('#test').click();
			expect(el.display()).toEqual({ year: d.getFullYear(), month: d.getMonth() + 1 });
		});
		it('Setter returns an API instance', function () {
			expect(el.display(2046, 10) instanceof DateTime).toBe(true);
		});
	});

	describe('Functional tests', function () {
		dt.html('input');
		it('Setter with past date', function () {
			var el = new DateTime('#test');
			$('#test').click();
			el.display(2002, 4);

			setTimeout(function () {
				expect(el.display()).toEqual({ year: 2002, month: 4 });
			}, 500);
		});
		it('Setter with past date', function () {
			var el = new DateTime('#test');
			$('#test').click();
			el.display(2046, 10);

			setTimeout(function () {
				expect(el.display()).toEqual({ year: 2046, month: 10 });
			}, 500);
		});
	});
});
