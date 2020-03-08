var x = 1;
x = 3;
x = 'hello';

console.log(x); // prints 'hello'

// // // // // // // // // // // // // //

const PI = 3.14; // CONST UNABLE TO CHANGE ASSIGNED VALUE
// const PI = 2; 
// console.log(PI); // error when replacing PI = Identifier 'PI' has already been declared

// // // // // // // // // // // // // //

// However, in const objects and arrays, the keys can be changed.

// array
const y = [];
y.push(1);
console.log(y); // prints [ 1 ]

// // // // // // // // // // // // // //

// object
const z = {};
z[0] = 1
z[1] = 1
console.log(z); // prints { '0': 1, '1': 1 }

// // // // // // // // // // // // // //

var codes = [1, 2, 3, 4];

function appendCodes(users) {
    users.forEach(function (user) {
        return codes.push(user.code);
    }) // will eventually print codes as [ 1, 2, 3, 4, 10 ]
    // codes = users.map(function (user) {
    //     return user.code;
    // }) // will eventually print codes as [ 10 ]
}

appendCodes([{
    code: 10
}])

console.log(codes);