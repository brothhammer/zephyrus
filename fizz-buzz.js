// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//       } else if (i % 3 === 0) {
//         console.log("Fizz");
//       } else if (i % 5 === 0) {
//         console.log("Buzz");
//       } else {
//         console.log(i);
//       }
//     }
//   }

//   console.log(fizzBuzz());

// There is no reason to console.log("FizzBuzz") since it requires duplicating the remainder checks. 
// Instead, you can use a single console.log statement and concatenate the strings.

// Usage: node fizz-buzz.js
  function fizzBuzzSimplified() {
    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 === 0) output += "Fizz";
        if (n % 5 === 0) output += "Buzz";
        console.log(output || n);
    }
  }

  console.log(fizzBuzzSimplified());
  