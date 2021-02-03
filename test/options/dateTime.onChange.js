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
					params = arguments;
				}
			});

			expect(params).toBe(undefined);
		});
		it('Trigger a change and confirm correct number of params', function () {
			$('#test').click();
			$('.now button span').click();
			expect(params.length).toBe(3);
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
			}).val('2021-01-01 12:12:12');

			$('#test').click();
			expect(count).toBe(0);
		});
		it('... triggers on date', function () {
			$('#test').click();
			$('.dt-datetime-calendar .selected button span').click();
			expect(count).toBe(1);
		});
		it('... does not trigger again if no change', function () {
			$('#test').click();
			$('.dt-datetime-calendar .selected button span').click();
			expect(count).toBe(1);
		});
		it('... triggers on hours', function () {
			$('#test').click();
			$('.dt-datetime-hours tbody tr:eq(0) td:eq(0) button span').click();
			expect(count).toBe(2);
		});
		it('... triggers on minutes', function () {
			$('#test').click();
			$('.dt-datetime-minutes tbody tr:eq(0) td:eq(0) button span').click();
			expect(count).toBe(3);
		});
		it('... triggers on seconds', function () {
			$('#test').click();
			$('.dt-datetime-seconds tbody tr:eq(0) td:eq(0) button span').click();
			expect(count).toBe(4);
		});

		dt.html('input');
		it('Does not trigger on disabled days', function () {
			count = 0;
			new DateTime(document.getElementById('test'), {
				disableDays: [1, 2],
				onChange: function () {
					count++;
					params = arguments;
				}
			}).val('2021-02-05');
			$('#test').click();
			$('.dt-datetime-calendar tbody tr:eq(1) td:eq(1) button span').click();
			expect(count).toBe(0);
		});
		it('... but does on enabled days', function () {
			$('.dt-datetime-calendar tbody tr:eq(1) td:eq(3) button span').click();
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
