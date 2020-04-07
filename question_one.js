/* Given a string, reverse each word in the sentence */

function reverse(str) { // We're going to write a function that reverses the string passed in. (the hard way)
    let string_arr = str.toString().split(''); // so we transform it in an array.
    let result = new Array();

    /* here, we have 2 ways to do it. First one, we can do a loop that goes to the last char of the string, and send it to an array. Like this: */

    for (let pos = string_arr.length; pos >= 0; pos--) // so, [POS] here, is equal to the string's length
        result.push(string_arr[pos]); // and here, we can push the last char of the string to an array

    // after the loop, [result] is going to be ['s', 't', 'r', 'i', 'n', 'g'].

    return result.join(''); // so we use join('') to join it all, so it's going to return 'string'.
}

function reverseEasy(str) { // and the second way, we can do it easily with some JS functions.
    return str.toString().split('').reverse().join(''); // ye, that's just it!

    // this function will do the same thing as the reverse(), but in 'one' line of code.
}

// if we want, we can do this in literally one line, like this:
// reverseEasy = str => str.toString().split('').reverse().join(''); // It's going to work the same way.

reverse('chicken'); // nekcihc
reverse(328); // 823

reverseEasy('egge'); // egge

reverseEasy('chicken'); // nekcihc
reverseEasy(328); // 823

// both of them do the job!