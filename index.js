let homeScoreDisplay = document.querySelector("#homeScoreDisplay")
let homeScore = 0

let guestScoreDisplay = document.querySelector("#guestScoreDisplay")
let guestScore = 0



function add1toHome(){
    homeScore++;
    homeScoreDisplay.textContent = homeScore;
}

function add2toHome(){
    homeScore += 2;
    homeScoreDisplay.textContent = homeScore;
}

function add3toHome(){
    homeScore += 3;
    homeScoreDisplay.textContent = homeScore;
}

function add1toGuest(){
    guestScore++;
    guestScoreDisplay.textContent = guestScore;
}

function add2toGuest(){
    guestScore += 2;
    guestScoreDisplay.textContent = guestScore;
}

function add3toGuest(){
    guestScore += 3;
    guestScoreDisplay.textContent = guestScore;
}

function clearHomeScore(){
    homeScore = 0;
    homeScoreDisplay.textContent = homeScore;
}

function clearGuestScore(){
    guestScore = 0;
    guestScoreDisplay.textContent = guestScore;
}