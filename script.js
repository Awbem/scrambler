const sentences = [
  "I like dogs",
  "I eat rice",
  "I walk in the park"
];

const generateBtn = document.getElementById("generateBtn");
const revealBtn = document.getElementById("revealBtn");
const wordBox = document.getElementById("wordBox");
const revealBox = document.getElementById("revealBox");

let currentSentence = "";

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function scrambleSentence(sentence) {
  const words = sentence.split(" ").filter(Boolean);
  return shuffle(words);
}

generateBtn.addEventListener("click", () => {
  currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
  const scrambled = scrambleSentence(currentSentence);
  wordBox.textContent = scrambled.join(" ");
  revealBox.textContent = "";
});

revealBtn.addEventListener("click", () => {
  if (!currentSentence) {
    revealBox.textContent = "Generate a sentence first to reveal it.";
    return;
  }
  revealBox.textContent = currentSentence;
});