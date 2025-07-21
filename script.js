// Functions of the Calculator
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.cal-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      display.value = '';
    } else if (value === '←') {
      display.value = display.value.slice(0, -1);
    } else if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += value;
    }
  });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if ((/[0-9+\-*/.=]/).test(key)) {
    if (key === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += key;
    }
  } else if (key === 'Enter') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key === 'Escape') {
    display.value = '';
  }
});