document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      try {
        if (operator === '/' && secondNum == 0) {
          throw new CustomError("Division by zero is not allowed");
        }
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
      } catch (error) {
        console.error('Error performing calculation:', error);
        output.innerHTML = error.message;
      }
    });
  
    class CustomError extends Error {
      constructor(message) {
        super(message);
        this.name = "CustomError";
      }
    }
  
    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
  
    // Add functionality to each button
    errorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        switch (btn.textContent) {
          case 'Console Log':
            console.log('This is a console log message');
            break;
          case 'Console Error':
            console.error('This is a console error message');
            break;
          case 'Console Count':
            console.count('Count label');
            break;
          case 'Console Warn':
            console.warn('This is a console warning message');
            break;
          case 'Console Assert':
            console.assert(false, 'This is a console assert message');
            break;
          case 'Console Clear':
            console.clear();
            break;
          case 'Console Dir':
            console.dir(document.body);
            break;
          case 'Console dirxml':
            console.dirxml(document);
            break;
          case 'Console Group Start':
            console.group('Group label');
            break;
          case 'Console Group End':
            console.groupEnd('Group label');
            break;
          case 'Console Table':
            console.table([{ a: 1, b: 'Y' }, { a: 2, b: 'Z' }]);
            break;
          case 'Start Timer':
            console.time('Timer');
            break;
          case 'End Timer':
            console.timeEnd('Timer');
            break;
          case 'Console Trace':
            console.trace('Trace message');
            break;
          case 'Trigger a Global Error':
            try {
              nonExistentFunction(); // This will trigger a global error
            } catch (error) {
              console.error('Global error caught:', error);
              TrackJS.track(error); // TrackJS tracking
            }
            break;
        }
      });
    });
  
    // Global error handler
    window.onerror = function (message, source, lineno, colno, error) {
      console.error('Global error caught:', message, 'at', source, lineno, colno, error);
      TrackJS.track(error); // TrackJS tracking
    };
  
    // Example of manually tracking an error with TrackJS
    TrackJS.track('Testing TrackJS!');
  });