let secretnumber = createSecretNumber();
let score = 20;
let hightscore = 0;

function createSecretNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function printGuessMessage(message) {
  document.querySelector(".guess-message").textContent = message;
}

function printScore(scr) {
  document.querySelector(".score").textContent = scr;
}

// щоб код працював при натиску на кнопки використовуємо слухачі подій

document.querySelector(".check").addEventListener("click", function () {
  const guessingNumber = Number(document.querySelector(".number-input").value);

  // не введене число

  if (!guessingNumber) {
    printGuessMessage("Введіть число!!!");

    // гравець виграв
  } else if (guessingNumber === secretnumber) {
    printGuessMessage("Правильно!!!");
    document.querySelector(".question").textContent = secretnumber;

    // міняємо колір і розмір бекграунду
    document.querySelector("body").style.backgroundColor = "rgb(83, 208, 89)";
    document.querySelector(".question").style.width = "50rem";

    // кращий результат)))
    if (score > hightscore) {
      hightscore = score;
      document.querySelector(".highscore").textContent = hightscore;
    }
    // номер, що ми вгадуємо не рівний числу в загадці
  } else if (guessingNumber !== secretnumber) {
    if (score > 1) {
      printGuessMessage(
        guessingNumber > secretnumber ? "Забагато!!!" : "Замало!!!"
      );
      score--;
      printScore(score);
    } else {
      printGuessMessage("Ви програли!");
      printScore(0);
    }
  }
});

//вішаємо події на кнопку спочатку

document.querySelector(".again").addEventListener("click", function () {
  //очищаємо поле введення
  let score = 20;
  document.querySelector(".number-input").value = "";

  // міняємо тьекст на починай вгадувати
  printGuessMessage("Починай вгадувати!!!");
  printScore(score);

  // міняємо колір і розмір бекграунду
  document.querySelector("body").style.backgroundColor = "rgb(0, 0, 0)";
  document.querySelector(".question").style.width = "25rem";

  //питальні знаки в секретному повідомленні

  document.querySelector(".question").textContent = "???";

  // додаємо нові числа, бо завжди буде одне і те ж
  secretnumber = createSecretNumber();
});