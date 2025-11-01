let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let highestscore=0;

let btns=["one","two","three","four"];

let h2=document.querySelector("h2");

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
 if(started==false){
  console.log("started game");
  started=true;
  levelUp();
 }
});

function gameFlash(btn){
  btn.classList.add("gameflash");
  setTimeout(function(){
    btn.classList.remove("gameflash");
  },250);
}

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },250);
}


function levelUp(){
  userSeq=[];
  level++;
  h2.innerText=`Level ${level}`;

  let randIdx=Math.floor(Math.random()*3);
  let randomColor=btns[randIdx];
  let randbtn=document.querySelector(`.${randomColor}`)
  gameSeq.push(randomColor);
  console.log(gameSeq);
  gameFlash(randbtn);
 
}


function checkAns(idx){
  if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      levelUp();
    }
  }
  else{
    h2.innerHTML=`Game over! <b>Your score is ${level}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },100);
    updateHighestScore();
    reset();
  }
}

function btnPress(){
  let btn=this;
  userFlash(btn);

  let userColor=btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");

for(let bt of allBtns){
  bt.addEventListener("click",btnPress);

}


function reset(){
  gameSeq=[];
 userSeq=[];
 started=false;
 level=0;
}



function updateHighestScore(){
  if(level>highestscore){
    highestscore=level;
    h3.innerText=`Highest Score : ${highestscore}`;
  }
}