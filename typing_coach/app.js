
let startTime;
let isStarted = false;

document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("user-input").value = "";
  document.getElementById("results").innerHTML = "";
  document.getElementById("feedback").innerHTML = "";
  isStarted = true;
  startTime = new Date().getTime();
});

document.getElementById("finish-btn").addEventListener("click", () => {
  if (!isStarted) {
    alert("Click Start before typing!");
    return;
  }

  const textToType = document.getElementById("text-to-type").innerText.trim();
  const userInput = document.getElementById("user-input").value.trim();

  // Accuracy Calculation
  let correctChars = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === textToType[i]) {
      correctChars++;
    }
  }
  const accuracy = ((correctChars / textToType.length) * 100).toFixed(2);

  // WPM Calculation
  const endTime = new Date().getTime();
  const timeTaken = (endTime - startTime) / 1000 / 60; // in minutes
  const wordsTyped = userInput.split(" ").length;
  const wpm = Math.round(wordsTyped / timeTaken);

  // Show Results
  document.getElementById("results").innerHTML = `
    ⏱ Time: ${(timeTaken*60).toFixed(1)}s <br>
    ✍️ Words Typed: ${wordsTyped} <br>
    🎯 Accuracy: <strong>${accuracy}%</strong> <br>
    ⚡ WPM: <strong>${wpm}</strong>
  `;

  // Positive AI Feedback
  let feedback = "";
  if (accuracy >= 90 && wpm >= 40) {
    feedback = "🌟 Outstanding! You’re a typing champion!";
  } else if (accuracy >= 70 && wpm >= 30) {
    feedback = "👍 Great job! Keep practicing and you’ll be unstoppable!";
  } else if (accuracy >= 50) {
    feedback = "💪 Nice effort! Focus on accuracy first, then speed.";
  } else {
    feedback = "😊 Don’t give up! Practice a little daily and you’ll improve fast.";
  }
 

  document.getElementById("feedback").innerHTML = `<strong>Feedback:</strong> ${feedback}`;
  isStarted = false;
});
