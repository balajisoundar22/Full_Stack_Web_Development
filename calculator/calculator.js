let result = document.getElementById('box');
		let operation = '';

		function insert(num) {
			if (result.value == '0') {
				result.value = num;
			} else {
				result.value += num;
			}
		}

		function clearResult() {
			result.value = '0';
		}

		function calculate() {
			result.value = eval(result.value);
		}

		function sqrt() {
			result.value = Math.sqrt(result.value);
		}

		function percentage() {
			result.value = eval(result.value + '/100');
		}