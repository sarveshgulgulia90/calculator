const display = document.getElementById('display');
const historyDiv = document.getElementById('history');

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    const result = eval(display.value);
    addToHistory(display.value + ' = ' + result);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

function sqrt() {
  try {
    let val = eval(display.value);
    display.value = Math.sqrt(val);
    addToHistory(`√(${val}) = ${display.value}`);
  } catch {
    display.value = 'Error';
  }
}

function square() {
  try {
    let val = eval(display.value);
    display.value = Math.pow(val, 2);
    addToHistory(`${val}² = ${display.value}`);
  } catch {
    display.value = 'Error';
  }
}

function percent() {
  try {
    let val = eval(display.value);
    display.value = val / 100;
    addToHistory(`${val}% = ${display.value}`);
  } catch {
    display.value = 'Error';
  }
}

function reciprocal() {
  try {
    let val = eval(display.value);
    display.value = 1 / val;
    addToHistory(`1/(${val}) = ${display.value}`);
  } catch {
    display.value = 'Error';
  }
}

function addToHistory(entry) {
  const p = document.createElement('p');
  p.textContent = entry;
  historyDiv.appendChild(p);
  historyDiv.scrollTop = historyDiv.scrollHeight;
}

document.addEventListener('keydown', (e) => {
  const key = e.key;
  if (!isNaN(key) || "+-*/().".includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    e.preventDefault();
    calculateResult();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
