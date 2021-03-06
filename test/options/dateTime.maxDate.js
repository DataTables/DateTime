describe('dateTime - options - maxDate', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

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

	describe('Functional tests', function () {
		let thisYear = new Date().getFullYear().toString();

		dt.html('input');
		it('Default', function () {
			new DateTime(document.getElementById('test'), {});
			$('#test').click();
			expect($('select.dt-datetime-year option').length).toBe(51);
			expect($('select.dt-datetime-year option:last-child').val()).toBe((new Date().getFullYear() + 25).toString());
		});

		dt.html('input');
		it('String', function () {
			new DateTime(document.getElementById('test'), {
				maxDate: getToday()
			});
			$('#test').click();
			expect($('select.dt-datetime-year option').length).toBe(26);
			expect($('select.dt-datetime-year option:last-child').val()).toBe(thisYear);
		});

		dt.html('input');
		it('String - mid-month', function () {
			new DateTime(document.getElementById('test'), {
				maxDate: getMidMonth()
			});
			$('#test').click();
			expect($('select.dt-datetime-year option').length).toBe(26);
			expect($('select.dt-datetime-year option:last-child').val()).toBe(thisYear);
			expect($('tbody tr:eq(1) td:eq(0)').hasClass('disabled')).toBe(false);
			expect($('tbody tr:eq(3) td:eq(0)').hasClass('disabled')).toBe(true);
		});

		dt.html('input');
		it('Date - mid-month', function () {
			new DateTime(document.getElementById('test'), {
				maxDate: new Date(getMidMonth())
			});
			$('#test').click();
			expect($('select.dt-datetime-year option').length).toBe(26);
			expect($('select.dt-datetime-year option:last-child').val()).toBe(thisYear);
			expect($('tbody tr:eq(1) td:eq(0)').hasClass('disabled')).toBe(false);
			expect($('tbody tr:eq(3) td:eq(0)').hasClass('disabled')).toBe(true);
		});
	});
});
