const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = [
  "the best.",
  "my love.",
  "beautiful.",
  "amazing.",
  "kind.",
  "caring.",
  "considerate.",
  "strong.",
  "wonderful.",
  "a sharpshooter.",
  "not sleepy yet.",
  "-tire screeching-",
];

const typingDelay = 200;
const erasingDelay = 200;
//delay between text
const newLetterDelay = 2000;

let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});

function type() {
  if (charIndex < words[index].length) {
    typedText.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    typedText.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}
