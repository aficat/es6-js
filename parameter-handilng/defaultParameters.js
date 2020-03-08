function buy(item, amount) {

    console.log(amount); // prints undefined

    if (amount === undefined) {
        amount = 1;
    }
    console.log(amount); // prints 1

    // invoke a db, and update the user to have more of that item
    // logic
    // logic
    // logic
    // logic
    // logic

    return;
}

buy('eggs');

// // // // // // // // // // // // // //

function buy(item, amount = 1) { // auto set undefined 'amount' to 1
    console.log(amount); // prints 1
    console.log(item) // prints eggs

    // invoke a db, and update the user to have more of that item
    // logic
    // logic
    // logic
    // logic
    // logic

    return;
}

buy('eggs');