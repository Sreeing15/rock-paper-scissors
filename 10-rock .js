const score=JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0,
};
updateScore();

function playGame(choice){
const compMove= pickMove();
let result='';
if (choice==='scissors'){
if (compMove==='rock'){
result='You lose.';
}
else if (compMove==='paper'){
result='you WIN!!';
}
else if (compMove==='scissors'){
result='tie.';
}
} 

else if(choice==='paper'){

if (compMove==='rock'){
result='you WIN!!';
}
else if (compMove==='paper'){
result='tie.';
}
else if (compMove==='scissors'){
result='You lose.';
}

} else if (choice ==='rock'){


if (compMove==='rock'){
result='tie.';
}
else if (compMove==='paper'){
result='You lose.';
}
else if (compMove==='scissors'){
result='you WIN!!';
}
}
if (result==='you WIN!!'){
score.wins+=1;
}else if(result==='You lose.'){
score.losses+=1;
}else if (result==='tie.'){
score.ties+=1;
}
localStorage.setItem('score',JSON.stringify(score)
);
updateScore();
document.querySelector('.js-result').innerHTML=result;
document.querySelector('.js-moves').innerHTML=`You 
<img src="images/${choice}.png" class="move-icon">
<img src="images/${compMove}.png" class="move-icon">
Computer`;

}
function updateScore(){
document.querySelector('.js-score').innerHTML=`Wins:${score.wins},Loses:${score.losses},ties:${score.ties}`;
};

function pickMove(){
const randNum = Math.random();
let compMove='';
if (randNum>=0&&randNum<1/3){
compMove='rock';
} else if (randNum >1/3&&randNum<2/3){
compMove='paper';
}else{
compMove='scissors';
}

return compMove;
}