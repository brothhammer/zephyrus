// Description: A simple script that takes a string as an argument and returns the reverse of that string.

// Usage: node reverse-string.js <string>
// Example: node reverse-string.js "hello" => "olleh"

// Implementation: The script uses the split() method to split the string into an array of characters, 
// then uses the reverse() method to reverse the order of the elements in the array, 
// and finally uses the join() method to join the elements back together into a string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

const input = process.argv[2];

if (input) {
    console.log(reverseString(input));
} else {
    console.log('Please provide a string to reverse');
}
