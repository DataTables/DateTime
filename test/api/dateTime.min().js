describe('dateTime - api - min()', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	let el;

	function pad(num) {
		return num < 10 ? '0' + num : num;
	}

	function getToday() {
		let d = new Date();
		return d.getFullYear() + '-' + pad(1 + d.getMonth()) + '-' + pad(d.getDate());
	}

	function getMidMonth() {
		let d = new Date();
		return d.getFullYear() + '-' + pad(1 + d.getMonth()) + '-' + '15';
	}

	function get20YearsAhead() {
		let d = new Date();
		return d.getFullYear() + 20 + '-' + pad(1 + d.getMonth()) + '-' + '15';
	}

	let thisYear = new Date().getFullYear().toString();

	describe('Check the defaults', function () {
		dt.html('input');
		it('Ensure its a function', function () {
			el = new DateTime(document.getElementById('test'));
			expect(typeof el.min).toBe('function');
		});
		it('Setting with a string returns an API instance', function () {
			expect(el.min(getToday()) instanceof DateTime).toBe(true);
		});
		it('Setter returns an API instance', function () {
			expect(el.min(new Date(getToday())) instanceof DateTime).toBe(true);
		});
	});

	describe('Functional tests', function () {
		dt.html('input');
		it('String - When picker closed', function () {
			el = new DateTime(document.getElementById('test'), {});
			el.min(getMidMonth());
			expect($('.dt-datetime-error').length).toBe(0);
		});
		it('... applied when opened', function () {
			$('#test').click();
			expect($('select.dt-datetime-year option').length).toBe(26);
			expect($('select.dt-datetime-year option:first-child').val()).toBe(thisYear);
			expect($('tbody tr:eq(1) td:eq(0)').hasClass('disabled')).toBe(true);
			expect($('tbody tr:eq(3) td:eq(0)').hasClass('disabled')).toBe(false);
		});
		it('... set when opened', function () {
			el.min(get20YearsAhead());
			expect($('select.dt-datetime-year option').length).toBe(6);
			expect($('tbody tr:eq(1) td:eq(0)').hasClass('disabled')).toBe(true);
			expect($('tbody tr:eq(3) td:eq(0)').hasClass('disabled')).toBe(true);
		});

		dt.html('input');
		it('Date - When picker closed', function () {
			el = new DateTime(document.getElementById('test'), {});
			el.min(new Date(getMidMonth()));
			expect($('.dt-datetime-error').length).toBe(0);
		});
		it('... applied when opened', function () {
			$('#test').click();
			expect($('select.dt-datetime-year option').length).toBe(26);
			expect($('select.dt-datetime-year option:first-child').val()).toBe(thisYear);
			expect($('tbody tr:eq(1) td:eq(0)').hasClass('disabled')).toBe(true);
			expect($('tbody tr:eq(3) td:eq(0)').hasClass('disabled')).toBe(false);
		});
		it('... set when opened', function () {
			el.min(new Date(get20YearsAhead()));
			expect($('select.dt-datetime-year option').length).toBe(6);
			expect($('tbody tr:eq(1) td:eq(0)').hasClass('disabled')).toBe(true);
			expect($('tbody tr:eq(3) td:eq(0)').hasClass('disabled')).toBe(true);
		});
	});
});
