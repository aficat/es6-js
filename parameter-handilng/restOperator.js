function print() {
    console.log(arguments);
    // prints :
    // [Arguments] {
    //   '0': 1,
    //   '1': 5,
    //   '2': 2,
    //   '3': 'hello',
    //   '4': 'world',
    //   '5': {}
    // }
}

print(1, 5, 2, 'hello', 'world', {})

// // // // // // // // // // // // // //

function print2() {
    var arr = Array.prototype.slice.call(arguments);
    console.log(arr); // prints [ 1, 5, 2, 'hello', 'world', {} ]
}

print2(1, 5, 2, 'hello', 'world', {})

// // // // // // // // // // // // // //

function print3(...arr) { // rest ... will help to form arguments into arrays
    // var arr = Array.prototype.slice.call(arguments); 
    console.log(arr); // prints [ 1, 5, 2, 'hello', 'world', {} ]
}

print3(1, 5, 2, 'hello', 'world', {})

// // // // // // // // // // // // // //

function print4(age, siblings, ...arr) { // slices arguments accordingly and prints remaining ...arr 
    // function print4(age, siblings, ...arr, x) { // error = Comma is not permitted after the rest element (...arr)
    console.log(age); // prints 1
    console.log(siblings); // prints 5
    console.log(arr); // prints [ 2, 'hello', 'world', {} ]
}

print4(1, 5, 2, 'hello', 'world', {})
