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

    function sin() {
      result.value = Math.sin(result.value);
    }

    function cos() {
      result.value = Math.cos(result.value);
    }

    function tan() {
      result.value = Math.tan(result.value);
    }

    function log() {
      result.value = Math.log(result.value);
    }

    function log10() {
      result.value = Math.log10(result.value);
    }

    function abs() {
      result.value = Math.abs(result.value);
    }

    function factorial() {
      var x = result.value;
      var res = 1;
      for (var i = 2; i <= x; i++) {
        res *= i;
      }
      result.value = res;
    }

    function round() {
      result.value = Math.round(result.value);
    }