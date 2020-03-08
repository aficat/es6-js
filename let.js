var w = 1;
var w = 2;
console.log(w); // prints 2

// // // // // // // // // // // // // //


let x = 1; // it is similar to var; however, you cannot redeclare/ redefine it again.
// let x = 1; // error = 'x' has already been declared
console.log(x); // prints 1

x = 2;
console.log(x); // prints 2

// // // // // // // // // // // // // //

// const y; // CONST must be initialised
// y = 1;
// console.log(y); // error = Missing initializer in const declaration

const numbers = [1, 5, 9, 3];
function getMax(arr) {
    let max = -Infinity;
    arr.forEach(function (number) {
        max = Math.max(max, number);
    })
    return max;
}

const max = getMax(numbers);
console.log(max); // prints 9

// Usually coders would use 'let' so that the declaration would not be changed or acccidentally overwritten.