// console.log(x); // error = x is not defined
// // temporal dead zone
// if (true) {
//     const x = 1;
//     // let x = 1; // similar to const x situation
// }

// // // // // // // // // // // // // //

console.log(x); // prints undefined
// temporal dead zone
if (true) {
    var x = 1;
}

// // // // // // // // // // // // // //

if (true) {
    const y = 1;
    // let y = 1; // similar to const y situation

    console.log(y); // prints 1
}

// console.log(y); // error; because it is outside the if conditional = y is not defined

// // // // // // // // // // // // // //

{
    let z = 1;
    console.log(z); // prints 1
    {
        let z = 2;
        console.log(z); // prints 2 -> since it is only omitted within this bracket block scope
    }
    console.log(z); // prints 1
}

// // // // // // // // // // // // // //

function fn() { return 3; }
function fn() { return 3; } // there is no error when declaring the same function twice

console.log(fn()); // prints 3

// // // // // // // // // // // // // //

const MAX = 5;

// variables are function-scoped
for (var i = 0; i < MAX; i++) {
    setTimeout(function () {
        console.log(i); // prints [5,5,5,5,5] because it uses Immediately-Invoked Funciton Expression to make the first for loop work
    })
}

// using let or const will bind the value of i during each iteration
for (let i = 0; i < MAX; i++) {
    setTimeout(function () {
        console.log(i); // prints [0,1,2,3,4]
    })
}