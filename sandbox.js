let sentence = 'alchemy rocks gold';

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

const titleCase = (sentence) => {
  return sentence
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const oddishOrEvenish = (num) => {
  const arr = num.toString().split('');
  const sum = arr.map((n) => Number(n)).reduce((a, b) => a + b, 0);
  return sum % 2 === 0 ? 'Evenish' : 'Oddish';
};

const at = (arr, i) => {
  return i >= 0 ? arr[i] : arr[arr.length + i];
}

oddishOrEvenish(121);

const fizzBuzz = (num) => {
  let results = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      results.push('fizzbuzz');
    } else if (i % 5 === 0) {
      results.push('buzz');
    } else if (i % 3 === 0) {
      results.push('fizz');
    } else (results.push(i));
  }
  return results;
}

const test = fizzBuzz(16);
test

function anagrams(wordOne, wordTwo) {
  sortedFirst = wordOne.split('').sort().join();
  console.log(sortedFirst);
  sortedSecond = wordTwo.split('').sort().join();
  console.log(sortedSecond);
  return (sortedFirst == sortedSecond) ? true : false;
}

console.log(anagrams('superintended', 'unpredestined'));

function uniqueString(strings) {
  const letters = strings.map((string) => new Set(string.toLowerCase()));
  const newString = Array.from(letters).join(' ');
  console.log(newString)
}

uniqueString([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]);