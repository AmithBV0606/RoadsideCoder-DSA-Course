// TIME COMPLEXITY : Judging an algorithm based on time taken for an algorithm with the increasing inputs.

// Example for O(1) and O(n)

const funnyNumber1 = (array) => {
    for (let i = 0; i < array.length; i++) {
        if(i === 3) return array[i]; // 4 Operations
    }
}

const nums = [1,2,3,4,5];

console.time("funnyNumber1");
console.log(funnyNumber1(nums))
console.timeEnd("funnyNumber1");

// Time Complexity of the "funnyNumber1" function is O(n), number of operations increases with the increasing input.
// _____________________________________________________________________________________________

const funnyNumber2 = (array) => {
    return array[3]; // 1 Operation
}

console.time("funnyNumber2");
console.log(funnyNumber2(nums))
console.timeEnd("funnyNumber2");

// Time Complexity of the "someOperation" function is O(1), constant number of operations.