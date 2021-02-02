describe('dateTime - api - owns()', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	let el, el2;

	describe('Check the defaults', function () {
		dt.html('input');
		it('Ensure its a function', function () {
			el = new DateTime(document.getElementById('test'));
			expect(typeof el.owns).toBe('function');
		});
		it('Returns a boolean', function () {
			expect(typeof el.owns()).toBe('boolean');
		});
	});

	describe('Functional tests', function () {
		dt.html('input');
		it('When picker closed', function () {
			el = new DateTime(document.getElementById('test'), {format: 'YYYY-MM-DD HH:mm:ss'});
			expect(el.owns('')).toBe(false);
			expect(el.owns($('#test'))).toBe(false);
		});
		it('... when opened', function () {
			$('#test').click();
			expect(el.owns('')).toBe(false);
			expect(el.owns($('#test'))).toBe(false);
			expect(el.owns($('.dt-datetime-month'))).toBe(true);
			expect(el.owns($('.dt-datetime-minutes'))).toBe(true);
			expect(el.owns($('.now'))).toBe(true);
		});

		it('Initialise second element', function () {
			el2 = new DateTime(document.getElementById('value'));

			expect(el2.owns('')).toBe(false);
			expect(el2.owns($('#test'))).toBe(false);
			expect(el2.owns($('.dt-datetime-month'))).toBe(false);
			expect(el2.owns($('.dt-datetime-minutes'))).toBe(false);
			expect(el2.owns($('.now'))).toBe(false);
		});
		it('... first still owns', function () {
			expect(el.owns('')).toBe(false);
			expect(el.owns($('#test'))).toBe(false);
			expect(el.owns($('.dt-datetime-month'))).toBe(true);
			expect(el.owns($('.dt-datetime-minutes'))).toBe(true);
			expect(el.owns($('.now'))).toBe(true);
		});
	});
});
