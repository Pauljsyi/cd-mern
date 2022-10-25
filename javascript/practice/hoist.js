
// console.log(example) --> undefined
// var example = "I'm the example!";
// output: undefined

// console.log(example)
// let example = "I'm the example!"
// output: reference error: cannot access 'example' before initialization

const array = ['a', 'b', 'c']

const concat = ['z'].concat(array)
console.log(array)
console.log(concat);

// array.unshift("runnning")
// console.log(array)

array.splice(0,0,"veal")
console.log(array);