describe('dateTime - api - errorMsg()', function () {
	dt.libs({
		js: ['jquery', 'datatables', 'moment', 'datetime'],
		css: ['datatables', 'datetime']
	});

	let el;

	describe('Check the defaults', function () {
		dt.html('input');
		it('Ensure its a function', function () {
			el = new DateTime(document.getElementById('test'));
			expect(typeof el.errorMsg).toBe('function');
		});
		it('Clearer returns an API instance', function () {
			expect(el.errorMsg() instanceof DateTime).toBe(true);
		});
		it('Setter returns an API instance', function () {
			expect(el.errorMsg('test') instanceof DateTime).toBe(true);
		});
	});

	describe('Functional tests', function () {
		dt.html('input');
		it('When picker closed', function () {
			el = new DateTime(document.getElementById('test'), {});
			el.errorMsg('test');

			expect($('.dt-datetime-error').length).toBe(0);
		});
		it('... displayed when opened', function () {
			$('#test').click();
			expect($('.dt-datetime-error').length).toBe(1);
			expect($('.dt-datetime-error').text()).toBe('test');
		});
		it('... changed when opened', function () {
			el.errorMsg('unittest');
			expect($('.dt-datetime-error').length).toBe(1);
			expect($('.dt-datetime-error').text()).toBe('unittest');
		});
		it('... changed when opened', function () {
			el.errorMsg('this is a long string for testing purposes to see how it looks');
			expect($('.dt-datetime-error').length).toBe(1);
			expect($('.dt-datetime-error').text()).toBe('this is a long string for testing purposes to see how it looks');
		});
		it('... cleared when opened', function () {
			el.errorMsg();
			expect($('.dt-datetime-error').length).toBe(1);
			expect($('.dt-datetime-error').text()).toBe('');
		});
	});
});
