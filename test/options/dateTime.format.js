describe('dateTime - options - format', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	function pad(num) {
		return num < 10 ? '0' + num : num;
	}

	function getToday(rev = false) {
		let d = new Date();
		return rev
			? pad(d.getDate()) + '-' + pad(1 + d.getMonth()) + '-' + d.getFullYear()
			: d.getFullYear() + '-' + pad(1 + d.getMonth()) + '-' + pad(d.getDate());
	}

	function getNow() {
		let d = new Date();
		return (
			d.getFullYear() +
			'-' +
			pad(1 + d.getMonth()) +
			'-' +
			pad(d.getDate()) +
			' ' +
			pad(d.getUTCHours()) +
			':' +
			pad(d.getUTCMinutes()) +
			':' +
			pad(d.getUTCSeconds())
		);
	}

	describe('Functional tests', function () {
		dt.html('input');
		it('Default - no time', function () {
			new DateTime(document.getElementById('test'), {});
			$('#test').click();
			expect($('.dt-datetime-time').is(':visible')).toBe(false);
		});
		it('... confirm setting', function () {
			$('.now button span').click();
			expect($('#test').val()).toBe(getToday());
		});

		dt.html('input');
		it('Reverse', function () {
			new DateTime(document.getElementById('test'), {format: 'DD-MM-YYYY'});
			$('#test').click();
			$('.now button span').click();
			expect($('#test').val()).toBe(getToday(true));
		});

		dt.html('input');
		it('Only year', function () {
			new DateTime(document.getElementById('test'), {format: 'YYYY'});
			$('#test').click();
			$('.now button span').click();
			expect($('#test').val()).toBe(new Date().getFullYear().toString());
		});

		dt.html('input');
		it('With time', function () {
			new DateTime(document.getElementById('test'), {format: 'YYYY-MM-DD HH:mm:ss'});
			$('#test').click();
			expect($('.dt-datetime-time').is(':visible')).toBe(true);
		});
		it('... confirm setting', function () {
			// get two times in case it flips over
			let time1 = getNow();
			$('.now button span').click();
			let time2 = getNow();
			let val = $('#test').val();

			expect(val == time1 || val == time2).toBe(true);
		});
	});
});
