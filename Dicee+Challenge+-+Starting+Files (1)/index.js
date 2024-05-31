const randomNumber = Math.floor(Math.random()*6)+1;
const randomNumber2 = Math.floor(Math.random()*6)+1;

if (randomNumber > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins"
} else if (randomNumber < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins"
} else {
    document.querySelector("h1").innerHTML = "It's a Draw"
}

document.querySelector(".img1").setAttribute('src', `images/dice${randomNumber}.png`)
document.querySelector(".img2").setAttribute('src', `images/dice${randomNumber2}.png`)