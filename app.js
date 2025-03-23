const homeScoreEl = document.getElementById('home-score');
const guestScoreEl = document.getElementById('guest-score');
const homeAddOneEL = document.getElementById('home-add-1');
const homeAddTwoEL = document.getElementById('home-add-2');
const homeAddThreeEL = document.getElementById('home-add-3');
const guestaddOneEL = document.getElementById('guest-add-1');
const guestaddTwoEL = document.getElementById('guest-add-2');
const guestaddThreeEL = document.getElementById('guest-add-3');


let homeScore = 0;
let guestScore = 0;



// function addOneHome(){
//     homeScore += 1;
//     homeScoreEl.textContent = homeScore;
// }
// function addTwoHome(){
//     homeScore += 2;
//     homeScoreEl.textContent = homeScore;
// }
// function addThreeHome(){
//     homeScore += 3;
//     homeScoreEl.textContent = homeScore;
// }



// function addOneGuest(){
//     guestScore += 1;
//     guestScoreEl.textContent = guestScore;
// }

// function addTwoGuest(){
//     guestScore += 2;
//     guestScoreEl.textContent = guestScore;
// }

// function addThreeGuest(){
//     guestScore += 3;
//     guestScoreEl.textContent = guestScore;
// }



const updateScore = (team, points) => {
    if (team === 'home'){
        homeScore += points;
        homeScoreEl.textContent = homeScore;
    }else if (team === 'guest'){
        guestScore += points;
        guestScoreEl.textContent = guestScore;
    }
}

// Home Event listeners
homeAddOneEL.addEventListener('click', () => updateScore('home', 1));
homeAddTwoEL.addEventListener('click', () => updateScore('home', 2));
homeAddThreeEL.addEventListener('click', () => updateScore('home', 3));


//  Guest Event listeners
guestaddOneEL.addEventListener('click', () => updateScore('guest', 1));
guestaddTwoEL.addEventListener('click', () => updateScore('guest', 2));
guestaddThreeEL.addEventListener('click', () => updateScore('guest', 3));

