import "./style.css";
// 각종 카운트
let totalCount = 10;
let computerCount = 0;
let userCount = 0;
let resultText = "";
const user = document.getElementById("player-score");
const documnetComputer = document.getElementById("computer-score");
const count = document.getElementById("count");
const endCount = document.getElementById("endCount");
const resultScore = document.getElementById("result");
const resultGameText = document.getElementById("resultText");
const btnGroup = document.getElementById("btnList");
const clearBtn = document.getElementById("clear");
const endGame = document.getElementById("endGame");

const handleBtnClick = (e) => {
  let computerRandom = Math.floor(Math.random() * 3 + 1);
  let computer = "";
  if (computerRandom === 1) computer = "r";
  else if (computerRandom === 2) computer = "s";
  else computer = "p";
  const rsp = e.target.id;

  const result = gameResult(rsp, computer);
  if (result === "-") resultText = "비겼습니다.";
  else if (result === "com") {
    resultText = "컴퓨터 승리";
    computerCount += 1;
  } else if (result === "user") {
    resultText = "플레이어 승리";
    userCount += 1;
  }

  totalCount -= 1;
  resultScore.classList.remove("d-none");

  if (totalCount === 0 || computerCount > 4) endGameText("lose");
  if (userCount > 4) endGameText("win");

  count.innerText = totalCount;
  user.innerText = userCount;
  documnetComputer.innerText = computerCount;
  resultGameText.innerText = resultText;
};

const endGameText = (result) => {
  result === "lose"
    ? (resultText = "게임에서 졌습니다!")
    : (resultText = "게임에서 이겼습니다!");
  clearBtn.classList.remove("d-none");
  btnGroup.classList.add("d-none");
  count.classList.add("d-none");
  endCount.classList.add("d-none");
  endGame.innerText = "게임종료!";
};

const gameResult = (userRsp, comRsp) => {
  if (userRsp === comRsp) return "-";
  if (userRsp === "r" && comRsp === "s") return "user";
  if (userRsp === "r" && comRsp === "p") return "com";
  if (userRsp === "s" && comRsp === "r") return "com";
  if (userRsp === "s" && comRsp === "p") return "user";
  if (userRsp === "p" && comRsp === "s") return "com";
  if (userRsp === "p" && comRsp === "r") return "user";
};

btnGroup.addEventListener("click", handleBtnClick);

const clear = () => {
  totalCount = 10;
  computerCount = 0;
  userCount = 0;
  count.innerText = totalCount;
  user.innerText = userCount;
  documnetComputer.innerText = computerCount;
  resultScore.classList.add("d-none");
  clearBtn.classList.add("d-none");
  btnGroup.classList.remove("d-none");
  endGame.innerText = "선택하기";
  endCount.classList.remove("d-none");
};

clearBtn.addEventListener("click", clear);
