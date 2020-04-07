/* How to empty an array in JavaScript? */

// so, we can do it in A LOT of ways, i'm gonna show you some of them.

let arr = [1, 2, 3, 3, 2, 1];

// first way: Just reset it.
arr = [];

// second way: You can set it's length to 0.
arr.length = 0;

// third way: You can loop between it's elements and remove it.

while (arr.length > 0) { // i'm gonna use WHILE loop this time.
    arr.splice(0, 1); // removes the *first* array's element until it's length = 0
    // arr.pop(); // removes the *last* array's element until it's length = 0
}

// or you can literally just splice it all
arr.splice(0, arr.length); // []

// fourth way: You can make a function to clear an array!
function clear(parameter_array) {
    return parameter_array.splice(0, parameter_array.length); // here we can use any of the methods above, just to clear it
}

clear(arr); // []


// or, you can use arrow functions:
clear = parameter_array => parameter_array.splice(0, parameter_array.length); // it's the 'same thing' as the function above!

clear(arr); // []