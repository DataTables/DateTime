describe('dateTime - options - hoursAvailable', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	let el;

	describe('Functional tests', function () {
		dt.html('input');
		it('Date & time', function () {
			el = new DateTime('#test', {
				format: 'D MMM YYYY HH:mm',
				hoursAvailable: [1, 15, 23]
			});
			$('#test').click();

			expect($('.dt-datetime-hours .dt-datetime-table td').not('.disabled').length).toBe(3);
			expect($('.dt-datetime-hours .dt-datetime-table td').not('.disabled').eq(0).text()).toBe('01');
			expect($('.dt-datetime-hours .dt-datetime-table td').not('.disabled').eq(1).text()).toBe('15');
			expect($('.dt-datetime-hours .dt-datetime-table td').not('.disabled').eq(2).text()).toBe('23');
		});

		dt.html('input');
		it('Just time', function () {
			el = new DateTime('#test', {
				format: ' HH:mm',
				hoursAvailable: [0, 15, 23]
			});
			$('#test').click();

			expect($('.dt-datetime-hours .dt-datetime-table td').not('.disabled').length).toBe(3);
			expect($('.dt-datetime-hours .dt-datetime-table td').not('.disabled').eq(0).text()).toBe('00');
			expect($('.dt-datetime-hours .dt-datetime-table td').not('.disabled').eq(1).text()).toBe('15');
			expect($('.dt-datetime-hours .dt-datetime-table td').not('.disabled').eq(2).text()).toBe('23');
		});
	});
});
