const resultElement = document.getElementById('result');
    let JADER = '';  

    function appendToResult(value) {
        JADER += value;
      resultElement.innerText = JADER;
    }

    function calculate() {
      try {
        JADER = eval(JADER);
        resultElement.innerText = JADER;
      } catch (error) {
        resultElement.innerText = 'Error';
      }
    }

    function clearResult() {
        JADER = '';
      resultElement.innerText = '0';
    }
