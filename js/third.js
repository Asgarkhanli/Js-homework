alert("Third task");
let typeIn = prompt("Type in your word here: ");
newWord(typeIn);

function newWord(word) {
  let lastThreeChar = String(word).substring(word.length - 3, word.length);
  if (String(word).length > 3) {
    alert(
      `The word you've entered was: ${word}. the new word is: ${
        lastThreeChar + word + lastThreeChar
      }`
    );
  } else if (word.length <= 3 || word.length != 0) {
    alert(`You entered a word with only 3 letters, thw word is ${word}`);
  } else {
    alert("No word was typed in");
  }
}
