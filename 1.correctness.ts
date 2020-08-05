/*
Question #1: Correctness

In TypeScript, write a function called "scriptAt". Prove that it's correct by providing a set of test cases. 
The function will do as follows.

Given a string as an input, find the index of the string "Script" within the input string. 

You can use Google to look up the method calls.

Questions:
1) How to ensure that the input is a string at compile time?
  -  กำหนด type ของ imput ที่จะรับ
2) What did you learn from this exercise?
  -  วิธีการเขียน function ของ TypeScript
*/


function scriptAt(input: string) {
    let index = input.indexOf('Script');
    console.log(index)
  }

scriptAt('helloScript')