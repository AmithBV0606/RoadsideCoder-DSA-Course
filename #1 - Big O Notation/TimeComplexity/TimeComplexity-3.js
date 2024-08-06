// Example for O(n^2)

function printBoth(n) {
    // n * n(n^2) Operations
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

printBoth(2); // Time Complexity = O(n^2)