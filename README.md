# JavaScript NaN Equality Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to the comparison of NaN (Not a Number) values.

## The Problem

In JavaScript, NaN is not equal to itself (NaN !== NaN). This behavior can lead to unexpected results when writing code that checks for equality. The provided `bug.js` file demonstrates this unexpected behavior.

## The Solution

The solution involves using the `Number.isNaN()` function to reliably check if a value is NaN. This function avoids the pitfalls of direct comparison and provides a robust way to handle NaN values.

## How to reproduce
1. Clone this repository.
2. Open `bug.js` to see the buggy code.
3. Run `bug.js`. You'll observe that `foo(NaN, NaN)` returns `false` instead of `true`, as one might intuitively expect.
4. Open `bugSolution.js` to see the solution to the problem.
5. Run `bugSolution.js` to see the correct result which is true when using `Number.isNaN()`

## Lessons Learned

This example highlights the importance of understanding JavaScript's unique treatment of NaN and employing appropriate methods for handling it. Always use `Number.isNaN()` when checking for NaN values to prevent unexpected and potentially problematic behavior.