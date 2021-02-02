describe('dateTime - options - onChange', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	let params;
	let count;

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

	describe('Check the defaults', function () {
		dt.html('input');
		it('Set stuff up', function () {
			new DateTime(document.getElementById('test'), {
				onChange: function () {
					console.log('fred');

					params = arguments;
				}
			});

			expect(params).toBe(undefined);
		});
		it('Trigger a change and confirm correct number of params', function () {
			$('#test').click();
			$('.now button span').click();
			// DD-1860 - and note the numbering will change in the following tests
			expect(params.length).toBe(3);
		});
		it('DateTime instance', function () {
			// DD-1860 - and note the numbering will change in the following tests
		});
		it('Current value', function () {
			expect(params[0]).toBe(getToday());
		});
		it('Date value', function () {
			expect(params[1] instanceof Date).toBe(true);
		});
		it('Input element', function () {
			expect($(params[2]).attr('id')).toBe('test');
		});
	});

	describe('Functional tests', function () {
		dt.html('input');
		it('Setup', function () {
			count = 0;
			new DateTime(document.getElementById('test'), {
				format: 'YYYY-MM-DD HH:mm:ss',
				onChange: function () {
					count++;
					params = arguments;
				}
			});

			$('#test').click();
			expect(count).toBe(0);
		});
		it('... triggers on date', function () {
			$('#test').click();
			$('.dt-datetime-calendar .selected button span').click();
			expect(count).toBe(1);
		});
		it('... triggers on date again even if no change', function () {
			// DD-1861 - i disagree with this so raised
			$('#test').click();
			$('.dt-datetime-calendar .selected button span').click();
			expect(count).toBe(2);
		});
		it('... triggers on hours', function () {
			// DD-1861 - i disagree with this so raised
			$('#test').click();
			$('.dt-datetime-hours .selected button span').click();
			expect(count).toBe(3);
		});
		it('... triggers on minutes', function () {
			// DD-1861 - i disagree with this so raised
			$('#test').click();
			$('.dt-datetime-minutes .selected button span').click();
			expect(count).toBe(4);
		});
		it('... triggers on seconds', function () {
			// DD-1861 - i disagree with this so raised
			$('#test').click();
			$('.dt-datetime-seconds .selected button span').click();
			expect(count).toBe(5);
		});

		dt.html('input');
		it('Does not trigger on disabled days', function () {
			count = 0;
			// DD-1854 - have to specify first day
			new DateTime(document.getElementById('test'), {
				firstDay: 0,
				disableDays: [1, 2],
				onChange: function () {
					count++;
					params = arguments;
				}
			});
			$('#test').click();
			$('.dt-datetime-calendar tbody tr:eq(1) td:eq(1) button span').click();
			expect(count).toBe(0);
		});
		it('... but does on enabled days', function () {
			$('.dt-datetime-calendar tbody tr:eq(1) td:eq(0) button span').click();
			expect(count).toBe(1);
		});

		dt.html('input');
		it('Does not trigger when maxDate set', function () {
			count = 0;
			new DateTime(document.getElementById('test'), {
				maxDate: getMidMonth(),
				onChange: function () {
					count++;
					params = arguments;
				}
			});
			$('#test').click();
			$('.dt-datetime-calendar tbody tr:eq(3) td:eq(0) button span').click();
			expect(count).toBe(0);
		});
		it('... but does on enabled days', function () {
			$('.dt-datetime-calendar tbody tr:eq(1) td:eq(0) button span').click();
			expect(count).toBe(1);
		});
	});
});
