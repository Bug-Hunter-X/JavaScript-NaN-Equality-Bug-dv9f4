function foo(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); // Output: false

//The bug is that NaN is not equal to itself. It is considered to be a special value that represents a non-numeric value. Hence, the comparison `a === b` will always return `false` if either `a` or `b` is NaN.