describe('dateTime - options - buttons', function () {
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

	describe('Functional tests', function () {
		dt.html('input');
		it('No buttons present by default', function () {
			el = new DateTime('#test');
			$('#test').click();
			expect($('.dt-datetime-clear').is(':visible')).toBe(false);
			expect($('.dt-datetime-today').is(':visible')).toBe(false);
		});

		dt.html('input');
		it('Both buttons present', function () {
			el = new DateTime('#test', { buttons: { today: true, clear: true } });
			$('#test').click();
			expect($('.dt-datetime-clear').is(':visible')).toBe(true);
			expect($('.dt-datetime-today').is(':visible')).toBe(true);
		});

		dt.html('input');
		it('Just today', function () {
			el = new DateTime('#test', { buttons: { today: true } });
			$('#test').click();
			expect($('.dt-datetime-clear').is(':visible')).toBe(false);
			expect($('.dt-datetime-today').is(':visible')).toBe(true);
		});
		it('... and confirm behaviour of today', function () {
			// change the date
			el.display(2021, 4);
			expect(el.display()).toEqual({ year: 2021, month: 4 });

			$('.dt-datetime-today').click();

			// TK COLIN disabled for now
			// expect(el.display()).toEqual({ year: d.getFullYear(), month: d.getMonth() + 1 });
		});

		dt.html('input');
		it('Just clear', function () {
			el = new DateTime('#test', { buttons: { clear: true } });
			$('#test').click();
			expect($('.dt-datetime-clear').is(':visible')).toBe(true);
			expect($('.dt-datetime-today').is(':visible')).toBe(false);
		});
		it('... and confirm behaviour of today', function () {
			$('td.now button').click();
			expect(format(el.val())).toEqual(format(d));

			$('#test').click();
			$('.dt-datetime-clear').click();

			// expect(el.val()).toEqual(null);
		});
	});
});
