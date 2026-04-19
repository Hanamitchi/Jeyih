function appendNumber(number) {
    document.getElementById('display').value += number;
  }
  
  function appendOperator(operator) {
    if (operator === '%') {
      calculatePercentage();
    } else {
      document.getElementById('display').value += operator;
    }
  }
  
  function calculatePercentage() {
    const display = document.getElementById('display');
    try {
      display.value = parseFloat(display.value) / 100;
    } catch (error) {
      display.value = 'Error';
    }
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculateResult() {
    const display = document.getElementById('display');
    let input = display.value;
    if (input === '3+3') {
        display.value = 'Ako Nalang kasi';
     }else{ 
    if (input === '2+2') {
        display.value = 'I Love You';
     }else{
        if(input === '1+1') {
            display.value = 'I Miss You';
     }else{
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
}
    }
    }
}
  