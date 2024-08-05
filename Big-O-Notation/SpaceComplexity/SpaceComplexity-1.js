// Space Complexity

// In algorithms, as the input size increases, so does the space complexity.

// Example 1 : O(1) => Space complexity
const funnyNumber = (array) => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

let score = [420, 96, 12, 69, 77];

console.log(funnyNumber(score));

// Here in the above example, the function 'funnyNumber' is updating and returning only one value. So the above code is example for good space complexity.  

// _____________________________________________________________________________________________

// Example 2 : O(n) => Space complexity
const funnyNumberArray = (n) => {
    const array = [];
    for (let i = 0; i < n; i++) {
        array.push(i * 69);        
    }
    return array;
}

console.log(funnyNumberArray(5));

// Here in this example the siize of the array depends on the input given for the 'funnyNumberArray' function. So this is the example for bad space complexity.

// _________________________________________________________________________________________

// Primitive Types :
// Boolean, number, undefined, null => has constant space complexity
// Strings, Arrays, Objects => has dynamic space complexity

// _________________________________________________________________________________________

// Example 3 : O(n^2) => Space complexity
function createMatrix(n) {
    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i + j;
        }        
    }

    return matrix;
}

console.log(createMatrix(10));