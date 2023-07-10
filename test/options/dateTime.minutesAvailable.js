describe('dateTime - options - minutesAvailable', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	let el;

	describe('Functional tests', function () {
		dt.html('input');
		it('Date & time', function () {
			el = new DateTime('#test', {
				format: 'D MMM YYYY HH:mm:ss',
				minutesAvailable: [1, 2, 3]
			});

			$('#test').click();

			expect($('.dt-datetime-minutes .dt-datetime-table td').not('.disabled').length).toBe(3);
			expect($('.dt-datetime-minutes .dt-datetime-table td').not('.disabled').eq(0).text()).toBe('01');
			expect($('.dt-datetime-minutes .dt-datetime-table td').not('.disabled').eq(1).text()).toBe('02');
			expect($('.dt-datetime-minutes .dt-datetime-table td').not('.disabled').eq(2).text()).toBe('03');
		});

		dt.html('input');
		it('Just time with scattered values', function () {
			el = new DateTime('#test', {
				format: ' HH:mm',
				minutesAvailable: [1, 15, 18]
			});

			$('#test').click();

			// first block
			expect($('.dt-datetime-minutes .dt-datetime-table td').not('.disabled').length).toBe(1);
			expect($('.dt-datetime-minutes .dt-datetime-table td').not('.disabled').eq(0).text()).toBe('01');

			// second block
			$('.dt-datetime-minutes tbody tr:eq(0) td:eq(1) button').click()

			expect($('.dt-datetime-minutes .dt-datetime-table td').not('.disabled').length).toBe(2);
			expect($('.dt-datetime-minutes .dt-datetime-table td').not('.disabled').eq(0).text()).toBe('15');
			expect($('.dt-datetime-minutes .dt-datetime-table td').not('.disabled').eq(1).text()).toBe('18');
		});
	});
});
