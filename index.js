let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeTitle = document.getElementById("home-title");
let guestTitle = document.getElementById("guest-title");
// ----------------------HOME
function addOneHome() {
  homeScore = homeScore + 1;
  homeScoreEl.textContent = homeScore;
  updateLeader();
}

function addTwoHome() {
  homeScore = homeScore + 2;
  homeScoreEl.textContent = homeScore;
  updateLeader();
}

function addThreeHome() {
  homeScore = homeScore + 3;
  homeScoreEl.textContent = homeScore;
  updateLeader();
}

// -------------------------GUEST
function addOneGuest() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
  updateLeader();
}

function addTwoGuest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
  updateLeader();
}

function addThreeGuest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
  updateLeader();
}
//----------------------- NEW GAME
function newGame() {
  guestScore = 0;
  homeScore = 0;
  guestScoreEl.textContent = 0;
  homeScoreEl.textContent = 0;
  updateLeader();
}
// LEADING SCORE
function updateLeader() {
  if (homeScore > guestScore) {
    homeTitle.classList.add("green-text");
    guestTitle.classList.remove("green-text");
  } else if (homeScore === guestScore) {
    homeTitle.classList.remove("green-text");
    guestTitle.classList.remove("green-text");
  } else {
    guestTitle.classList.add("green-text");
    homeTitle.classList.remove("green-text");
  }
}
