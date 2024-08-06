// Judging an algorithm based on number of operations.

// Example for O(1) and O(n)

// Example 1 : 
// function someOperation(n) {
//     // 3 Operation
//     return (n * (n + 5)) / 2;
// }

// console.time("someOperation");
// console.log(someOperation(30));
// console.timeEnd("someOperation");

// NOTE : The time taken for the above code to execute, remains same no matter how big the input is. Because the number of operation performed in the "someOperation" function is 3 across all inputs.

// Time Complexity of the "someOperation" function is O(1), constant number of operations.

// ____________________________________________________________________________________________

// Example 2 : 
function GoingUpDown(n){
    console.log("Going Forward!");

    for (let i = 0; i < n; i++) {
        console.log(i);
    }

    console.log("At the end, Going back!");

    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }

    console.log("At the start!");    
}

console.time("GoingUpDown");
GoingUpDown(20);
console.timeEnd("GoingUpDown");

// Here the number of operations increases with the increasing input size. The "GoingUpDown" function has "2n + 3" operations

// Time Complexity of the "GoingUpDown" function is O(n), number of operations increases with the increasing input.