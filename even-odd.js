// Implementation: Use the modeule operator (%) to check if an input is even or odd.
// Before calling the function evenOdd(), verify that the input is a number using the isNaN() function.
// isNaN() returns true if the input is not a number, and false if it is a number. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN

// Usage: node even-odd.js <number>
function evenOdd(num) {
    return num % 2 === 0 ? 'even' : 'odd';
};

const input = process.argv[2];

if (!isNaN(input)) {
    const number = Number(input);
    console.log(evenOdd(number));
} else {
    console.log('Please provide a valid number to check if it is even or odd');
}
