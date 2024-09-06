////////////////////////=>
/* a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor*/
////////////////////////=>

/*  => Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'*/

const player: string = "rock";

function roshambo(word: string) {
  const alpabhet: string = "ABCDEFGHI";
  let opponent: string = alpabhet.charAt(
    Math.floor(Math.random() * alpabhet.length)
  );

  if (opponent == "A" || opponent == "F" || opponent == "H") {
    opponent = "rock";
  } else if (opponent == "C" || opponent == "G" || opponent == "E") {
    opponent = "paper";
  } else {
    opponent = "scissor";
  }
  console.log(opponent);

  let resultRoshambo: string = "";
  if (player == opponent) {
    resultRoshambo = "Draw";
  } else if (player == "rock") {
    resultRoshambo = opponent == "paper" ? "Win" : "Lose";
  } else if (player == "paper") {
    resultRoshambo = opponent == "scissor" ? "Win" : "Lose";
  } else if (player == "scissor") {
    resultRoshambo = opponent == "rock" ? "Win" : "Lose";
  }

  return resultRoshambo;
}

let resultRoshambo = roshambo(player);
console.log(resultRoshambo);
