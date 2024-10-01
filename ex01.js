// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".


function capitalizeWords (word){
    
    let words = word.split(' ')
    const newWords = []

    words.forEach(word => {
        const firstletter = word[0].toUpperCase()
        const remainLetters = word.substring(1)

        
        const combinedLetters = firstletter + remainLetters
        newWords.push(combinedLetters)
    });
    return newWords.join(" ")

    
}


console.log(capitalizeWords("hello world!")); // Expected output: "Hello World"
