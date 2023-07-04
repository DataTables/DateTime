describe('dateTime - options - locale', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	let el;
	const d = new Date();

	function pad(num) {
		return num < 10 ? '0' + num : num;
	}

	// TK COLIN make this a generic function somewhere as repeated
	function format(d) {
		return d.getUTCFullYear() + '-' + pad(1 + d.getUTCMonth()) + '-' + pad(d.getUTCDate());
	}

	// TK COLIN not entirely sure what this does, but skipping for now as other priorities
	describe('Functional tests', function () {
		dt.html('input');
		it('No buttons present by default', function () {
			el = new DateTime('#test', { locale: 'fr' });

			$('#test').click();
			$('td.now button').click();

			expect(format(el.val())).toEqual(format(d));
		});
	});
});
