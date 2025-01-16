function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Arguments cannot be null'); 
  }
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3

try {
  console.log(foo(null, 1)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Arguments cannot be null
}

try {
  console.log(foo(1, null)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Arguments cannot be null
}

try {
  console.log(foo(null, null)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Arguments cannot be null
} 