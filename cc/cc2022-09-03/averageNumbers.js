// Average Numbers

// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

const average = s=> Math.round(s.reduce((a,c)=> a + +c ) / s.length)