// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



function reverse(str) {
  return str.split('').reduce((a, b) =>  b + a, '');
}

// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
// }

// function reverse(str) {
//   const split = str.split('');
//   const newstr = [];
//   for(let i = split.length - 1; i >= 0; i--){
//     newstr.push(split[i]);
//   }
//   return newstr.join('')
// }

module.exports = reverse;
