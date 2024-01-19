// String average
// https://www.codewars.com/kata/5966847f4025872c7d00015b/train/javascript



// You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

// "zero nine five two" -> "four"

// If the string is empty or includes a number greater than 9, return "n/a"



const n = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 }

const averageString = str => {
    const as = str.split(' ')
    return Object.keys(n).find(x => n[x] === Math.floor(as.map(x => n[x])
        .reduce((a, c) => a + c, 0) / as.length)) || 'n/a'
}