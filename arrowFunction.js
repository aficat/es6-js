// Arrow functions: statemeny body, expression body, lexical this

// // // // // // // // // // // // // //

const arr = [1, 2, 3, 4];

const byTwo = arr.map(function (number) {
    return number * 2;
})

console.log(byTwo); // prints [ 2, 4, 6, 8 ]

// // // // // // // // // // // // // //

const byTwo2 = arr.map((number) => { // arrow function
    // const byTwo2 = arr.map(number => { // it is unnecessary to have the parenthesis () for 'number' when the function has only a single argument
    // const byTwo2 = arr.map((number, index) => { // using parenthesis when there are 2 arguments (number, index)
    return number * 2; // statement body
})

console.log(byTwo2); // prints [ 2, 4, 6, 8 ]

// // // // // // // // // // // // // //

const byTwo3 = arr.map(number => number * 2); // expression body -> curly braces {} is not needed
// including return statement requires curly braces {}

console.log(byTwo3); // prints [ 2, 4, 6, 8 ]

// // // // // // // // // // // // // //

const byTwo4 = arr.map((number) => {
    number: number * 2;
});
console.log(byTwo4); // prints [ undefined, undefined, undefined, undefined]

const byTwo5 = arr.map((number) => (
    { number: number * 2 }
));

console.log(byTwo5); // prints [ { number: 2 }, { number: 4 }, { number: 6 }, { number: 8 } ]

const byTwo6 = arr.map(() => 2);
console.log(byTwo6); // prints [ 2, 2, 2, 2 ]

// // // // // // // // // // // // // //

var obj = {
    value: 0,
    increment: function () {
        setTimeout(function () {
            this.value++;
            console.log(this.value); // prints NaN
        }, 1000);
    }
}

obj.increment();

// // // // // // // // // // // // // //

var obj2 = {
    value: 0,
    increment: function () {
        var that = this; // lexical this
        // this function can be simplified using binding seen in next example.
        setTimeout(function () {
            that.value++;
            console.log(that.value); // prints 1
        }, 1000);
    }
}

obj2.increment();

// // // // // // // // // // // // // //

var obj3 = {
    value: 0,
    increment: function () { // solves the lexical this problem by utilising arrow function; this refers to 'value
        setTimeout(() => {
            this.value++; // lexical this
            console.log(this.value); // prints 1
        }, 1000);
    }
}

obj3.increment();

// // // // // // // // // // // // // //

var obj4 = {
    value: 0,
    increment: () => { // this arrow function is finding the global 'value' declaration thus prints NaN
        setTimeout(() => {
            this.value++; // lexical this
            console.log(this.value); // prints NaN
        }, 1000);
    }
}

obj4.increment();
