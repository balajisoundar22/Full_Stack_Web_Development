function insert(char) {
    document.getElementById('input').value += char;
  }
  
  function clearInput() {
    document.getElementById('input').value = '';
  }
  
  function backspace() {
    var input = document.getElementById('input');
    input.value = input.value.substring(0, input.value.length - 1);
  }
  
  function calculate() {
    var input = document.getElementById('input').value;
    var output = eval(input);
    document.getElementById('input').value = output;
  }
  
  function sin(x) {
    return Math.sin(x);
  }
  
  function cos(x) {
    return Math.cos(x);
  }
  
  function tan(x) {
    return Math.tan(x);
  }  