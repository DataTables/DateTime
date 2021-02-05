describe('dateTime - api - val()', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	let el;

	function pad(num) {
		return num < 10 ? '0' + num : num;
	}

	// TK COLIN make this a generic function somewhere as repeated
	function format(d) {
		return d.getFullYear() + '-' + pad(1 + d.getMonth()) + '-' + pad(d.getDate());
	}

	let today = format(new Date());

	describe('Check the defaults', function () {
		dt.html('input');
		it('Ensure its a function', function () {
			el = new DateTime(document.getElementById('test'));
			expect(typeof el.min).toBe('function');
		});
		it('Getter returns null if no date set', function () {
			expect(el.val()).toBe(null);
		});
		it('Setter returns an API instance', function () {
			expect(el.val(today) instanceof DateTime).toBe(true);
		});
		it('Getter returns an Date instance', function () {
			expect(el.val() instanceof Date).toBe(true);
		});
	});

	describe('Functional tests', function () {
		dt.html('input');
		it('Get value when set in element', function () {
			el = new DateTime(document.getElementById('value'));
			expect(format(el.val())).toBe('2021-10-20');
		});
		it('... applied when opened', function () {
			$('#value').click();
			expect(format(el.val())).toBe('2021-10-20');
		});
		it('... set when opened', function () {
			el.val(today);
			expect(format(el.val())).toBe(today);
		});

		dt.html('input');
		it('Set time element', function () {
			el = new DateTime(document.getElementById('test'), {format: 'HH:mm'});
			el.val('11:22');
			expect(el.val().getHours()).toBe(11);
			expect(el.val().getMinutes()).toBe(22);
		});
		it('... set when opened', function () {
			$('#test').click();
			el.val('10:33');
			expect(el.val().getHours()).toBe(10);
			expect(el.val().getMinutes()).toBe(33);
		});
		it('... updates display', function () {
			expect($('.dt-datetime-hours .selected').text()).toBe('10');
			expect($('.dt-datetime-minutes .selected').text()).toBe('33');
		});
	});
});
