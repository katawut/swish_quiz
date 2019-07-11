function isPalindrome(word) {
  return word.toLowerCase().split('').reverse().join('') === word.toLowerCase();
}

let word = 'Deleveled';
console.log(word, isPalindrome(word));