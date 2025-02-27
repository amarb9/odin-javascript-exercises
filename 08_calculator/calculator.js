const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let result = 0;

  for(let i = 0; i < arr.length; i++) {
    result += arr[i]
  }

  return result;
};

const multiply = function(arr) {
  let result = 1;

  for(let i = 0; i < arr.length; i++) {
    result *= arr[i]
  }

  return result;  
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }
  else if(n > 1){
    for(let i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
