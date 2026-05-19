let homeScore = 0;
let guestScore = 0;

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

// ----------------------HOME
function addOneHome() {
  homeScore = homeScore + 1;
  homeScoreEl.textContent = homeScore;
}

function addTwoHome() {
  homeScore = homeScore + 2;
  homeScoreEl.textContent = homeScore;
}

function addThreeHome() {
  homeScore = homeScore + 3;
  homeScoreEl.textContent = homeScore;
}

// -------------------------GUEST
function addOneGuest() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function addTwoGuest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function addThreeGuest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}
//----------------------- NEW GAME
function newGame() {}
