function foo(a, b) {
  a ??= 0; // Use 0 as default value if a is null or undefined
  b ??= 0; // Use 0 as default value if b is null or undefined
  // ... rest of the function code
  return a + b;
}