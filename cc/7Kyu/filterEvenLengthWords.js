/* filterEvenLengthWords
https://www.codewars.com/kata/59564f3bcc15b5591a00004a/train/javascript



Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);

console.log(output); // --> ['word', 'word']
*/


const filterEvenLengthWords = words => words.filter(word => word.length % 2 == 0)
