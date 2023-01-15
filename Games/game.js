const bfDes = document.getElementById("bfDescription");
const bfDesText = `This game was made with the LÖVE framework. This
game is not finished, however. It is mostly a prototype for
another game. You get to play as the pipes from "Flappy Bird".`;
const des = document.querySelector(".description");
document.getElementById("birdFlappy").style.left = `${window.innerWidth / 2 - 130}px`;
var gameButtons = document.getElementsByClassName('gameButton');
for(let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].addEventListener("mouseover", function() {
        if (i == 0) {
            document.getElementById("birdFlappy").style.left = `${window.innerWidth / 2 - 140}px`;
            bfDes.style.left = `${window.innerWidth / 2 + 140}px`;
            bfDes.innerHTML = bfDesText
        }
  })
}
for(let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].addEventListener("mouseout", function() {
        if (i == 0) {
            bfDes.innerHTML = ""
        }
  })
}
window.addEventListener('resize', ()=>{
    document.getElementById("birdFlappy").style.left = `${window.innerWidth / 2 - 130}px`;
})