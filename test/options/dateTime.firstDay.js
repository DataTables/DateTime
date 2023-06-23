describe('dateTime - options - firstDay', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	describe('Functional tests', function () {
		dt.html('input');
		it('Default', function () {
			new DateTime(document.getElementById('test'), {});
			$('#test').click();
			expect($('.dt-datetime-date thead th').text()).toBe('MonTueWedThuFriSatSun');
		});

		dt.html('input');
		it('Mid-week', function () {
			new DateTime(document.getElementById('test'), {firstDay: 3});

			expect($('div.dt-datetime').length).toBe(0);
			$('#test').click();
			expect($('.dt-datetime-date thead th').text()).toBe('WedThuFriSatSunMonTue');
		});

		dt.html('input');
		it('end of week', function () {
			new DateTime(document.getElementById('test'), {firstDay: 6});

			expect($('div.dt-datetime').length).toBe(0);
			$('#test').click();
			expect($('.dt-datetime-date thead th').text()).toBe('SatSunMonTueWedThuFri');
		});
	});
});
