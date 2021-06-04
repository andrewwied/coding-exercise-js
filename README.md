# About
This is a little exercise we can work through together to get an idea how you code. Keep in mind that we're in this together! Feel free to ask for opinions or questions, we're here to help! We just want to know your train of thought and how it will be when you're working on our team!

# Problem

We want to build a function which, given a positive number, returns a newline-delimited series of cyclic permutations of the numbers from 1 to the supplied number. It's probably easier to know what this means by looking at some examples:

## Examples
Input: `0`
Output: 
```
<empty string>
```

Input: `1`
Output: 
 ```
  1
 ```

 Input: `2`
 Output:
 ```
 12
 21
 ```

 Input: `3`
 Output:
 ```
 123
 312
 231
 ```

 Input: `4`
 Output: 
 ```
 1234
 4123
 3412
 2341
 ```

.. and so on. Don't worry about negative numbers.

# Technical 
You can output the answer to the console, or you can use the included unit tests. To run them do the following:
```
npm install
npm run test
```
Note - the jest library requires node 10+. 



