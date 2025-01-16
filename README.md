# Unexpected Behavior with Null Arguments

This repository demonstrates a subtle bug in a JavaScript function that handles null arguments unexpectedly. The `foo` function is designed to add two numbers. However, when one or both of the arguments are `null`, it returns 0 instead of raising an error or providing a more meaningful response. 

## Bug Description

The current implementation of the `foo` function silently returns 0 when encountering `null` arguments, which might lead to unexpected results in real-world applications. The function should either explicitly handle `null` values (e.g., by treating them as 0 or raising an exception) or improve its input validation to prevent null values from being passed.

## Solution

The provided solution modifies the `foo` function to throw an error when it receives `null` arguments. This approach ensures that the function behaves as expected and notifies the caller of the error condition.  This improves code robustness and maintainability.