describe('dateTime - options - yearRange', function () {
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

	describe('Functional tests', function () {
		let thisYear = new Date().getFullYear();

		dt.html('input');
		it('Default', function () {
			new DateTime(document.getElementById('test'), {});
			$('#test').click();
			expect($('select.dt-datetime-year option').length).toBe(51);
			expect($('select.dt-datetime-year option:first-child').val()).toBe((thisYear - 25).toString());
			expect($('select.dt-datetime-year option:last-child').val()).toBe((thisYear + 25).toString());
		});

		dt.html('input');
		it('Custom number', function () {
			new DateTime(document.getElementById('test'), {
				yearRange: 5
			});
			$('#test').click();
			expect($('select.dt-datetime-year option').length).toBe(11);
			expect($('select.dt-datetime-year option:first-child').val()).toBe((thisYear - 5).toString());
			expect($('select.dt-datetime-year option:last-child').val()).toBe((thisYear + 5).toString());
		});

		dt.html('input');
		it('When used with maxDate', function () {
			new DateTime(document.getElementById('test'), {
				yearRange: 5,
				maxDate: getToday()
			});
			$('#test').click();
			expect($('select.dt-datetime-year option').length).toBe(6);
			expect($('select.dt-datetime-year option:first-child').val()).toBe((thisYear - 5).toString());
			expect($('select.dt-datetime-year option:last-child').val()).toBe(thisYear.toString());
		});
	});
});
