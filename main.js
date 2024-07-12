const calc = (a, b, action) => !['+', '-', '/', '*'].includes(action) ? -1 : {'+': () => a + b, '-': () => a - b, '*': () => a * b, '/': () => a / b}[action](); console.log(calc(2, 2, '+'))
