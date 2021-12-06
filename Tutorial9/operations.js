const operations = {
    'add': {
        sign: '+',
        action: (a, b) => {
            return a + b;
        }
    },
    'substract': {
        sign: '-',
        action: (a, b) => {
            return a - b;
        }
    },
    'multiply': {
        sign: '*',
        action: (a, b) => {
            return a * b;
        }
    },
    'divide': {
        sign: '/',
        action: (a, b) => {
            return a / b;
        }
    }
};

exports.calculate = function(data) {
    let result = operations[data.operator].action(parseInt(data.num1), parseInt(data.num2));
    return result;
}

exports.format = function(data, result) {
    data.operator = operations[data.operator].sign;
    data['result'] = result;
    return data;
}