describe('dateTime - basic initialisation', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	describe('Functional tests', function () {
		dt.html('input');
		it('Standard initialsiation', function () {
			new DateTime(document.getElementById('test'), {});

			expect($('.dt-datetime').length).toBe(0);
			$('#test').click();
			expect($('.dt-datetime').length).toBe(1);
		});

		dt.html('input');
		it('Standard initialsiation with options', function () {
			new DateTime(document.getElementById('test'), {firstDay: 3});
			$('#test').click();
			expect($('.dt-datetime th:eq(0)').text()).toBe('Wed');
		});

		// For simplicity, this is the only place when jQuery initialisation is tested.
		// Elsewhere the tests will always use the object approach shown above
		dt.html('input');
		it('jQuery initialsiation', function () {
			$('#test').dtDateTime();
			expect($('.dt-datetime').length).toBe(0);
			$('#test').click();
			expect($('.dt-datetime').length).toBe(1);
		});

		dt.html('input');
		it('jQuery initialsiation with options', function () {
			$('#test').dtDateTime({firstDay: 3});
			$('#test').click();
			expect($('.dt-datetime th:eq(0)').text()).toBe('Wed');
		});
	});
});
