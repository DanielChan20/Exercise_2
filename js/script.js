let challenge = '30 Days Of JavaScript'; //Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'. 

console.log(challenge);//Print the string on the browser console using console.log() 

console.log(challenge.length);//Print the length of the string on the browser console using console.log() 

console.log(challenge.toUpperCase());//Change all the string characters to capital letters using toUpperCase() method 

console.log(challenge.toLowerCase());//Change all the string characters to lowercase letters using toLowerCase() method 

console.log(challenge.substring(0, 2)); //Cut (slice) out the first word of the string using substr() or substring() method 

console.log(challenge.substring(3));//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript. 

console.log(challenge.includes('Script'));//Check if the string contains a word Script using includes() method

console.log(challenge.split(''));//Split the string into an array using split() method


console.log(challenge.split(' '));//Split the string 30 Days Of JavaScript at the space using split() method 

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array. 

console.log(challenge.replace('JavaScript', 'Node'));//Change 30 Days Of JavaScript to 30 Days Of Node using replace() method. 

console.log(challenge.charAt(15));//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method. 

console.log(challenge.charCodeAt(challenge.indexOf('J')));//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt() 

console.log(challenge.indexOf('a'));//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript 


console.log(challenge.lastIndexOf('a'));//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript. 


let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction' 


console.log(sentence.lastIndexOf('because'));//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction' 


console.log(sentence.search('because'));//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction' 


let trimmedString = ' 30 Days Of JavaScript ';
console.log(trimmedString.trim());//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.


console.log(challenge.startsWith('30'));//Use startsWith() method with the string 30 Days Of JavaScript and make the result true


console.log(challenge.endsWith('JavaScript'));//Use endsWith() method with the string 30 Days Of JavaScript and make the result true 


console.log(challenge.match(/a/g));//Use match() method to find all the a’s in 30 Days Of JavaScript 


let phrase1 = '30 Days of';
let phrase2 = ' JavaScript';
console.log(phrase1.concat(phrase2));//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript


console.log(challenge.repeat(2));//Use repeat() method to print 30 Days Of JavaScript 2 times 

