function sum(a, b) {
  // If both arguments are provided, return the sum directly
  if (typeof b !== "undefined") {
    return a + b;
  }

  // Otherwise, return a function waiting for the second argument
  return function(c) {
    return a + c;
  };
}

// Examples:
console.log(sum(2, 3));   // 5
console.log(sum(2)(3));   // 5