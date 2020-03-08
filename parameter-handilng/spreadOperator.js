function print() {
    var args = Array.prototype.slice.call(arguments);
    args = ['<br>'].concat(args).concat(['<br>'])
    console.log(args.join(' ')); // prints <br> hello world <br>
}

print('hello', 'world')

// // // // // // // // // // // // // //

function print2(...args) {
    args = ['<br>', ...args, '<br>']; // concats exactly as previous example and flattens out all elements in a string in an array
    console.log(args.join(' ')); // prints <br> hello world <br> 
}

print2('hello', 'world')

// // // // // // // // // // // // // //

const message = "hello world";
const chars = [...message]; // seperates each character into an array of character strings
console.log(chars);
// prints
// [
//     'h', 'e', 'l', 'l',
//     'o', ' ', 'w', 'o',
//     'r', 'l', 'd'
// ]

// // // // // // // // // // // // // //

const arr = [1, 2, 3];
arr.unshift(10, ...arr, 4);
console.log(arr);
//prints
// [
//     10, 1, 2, 3,
//      4, 1, 2, 3
// ]

// // // // // // // // // // // // // //

const numbers = [1, 50, 30, 20];

// find max in array
const max = Math.max(...numbers);
console.log(max); // prints 50