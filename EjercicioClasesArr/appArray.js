// ejercicio 1

let numbers = [1, 2 , 3, 4, 5, 6]
console.log(numbers.length);

// ejercicio 2

let number = 4;
console.log(Array.isArray(numbers));
console.log(Array.isArray(number));

// ejercicio 3
console.log(numbers.shift());
console.log(numbers.toString());

//ejercicio 4
console.log(numbers.pop());
console.log(numbers.toString());

//ejericicio 5
console.log(numbers.unshift(1));

// ejercicio 6
console.log(numbers.reverse());
console.log(numbers.join(" "))

// ejercicio 7
numbers.splice(1,2,10,23,54);
console.log(numbers);

// ejercicio 8
numbers.splice(2,0,12,14);
console.log(numbers);