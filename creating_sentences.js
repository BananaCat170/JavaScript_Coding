// TODO: Create an array variable called "words" with the following elements: 'This', 'is', 'JavaScript', 'Coding!'
// YOUR CODE GOES HERE
let words = ["This", "is", "JavaScript", "coding!"];

// TODO: Create an empty string variable called "sentence".
// YOUR CODE GOES HERE
let sentence = "";

// TODO: 
// 1. Create a function called "createSentence" that takes an array as an argument.
// 2. In the function use a for loop to iterate through each word element of the array.
// 3. Add each word to the "sentence" variable.
// 4. Return the "sentence".
// YOUR CODE GOES HERE
function createSentence(wordsInSentence) {
    for (let i = 0; i < wordsInSentence.length; i++) {
        sentence += wordsInSentence[i];
        sentence += " ";
    }
    return sentence;
}


// TODO: Call the function "createSentence" using the console.log method.
// YOUR CODE GOES HERE
console.log(createSentence(words));