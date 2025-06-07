const startBtn=document.getElementById("start-btn");
const quizScreen=document.getElementById("quiz-screen");
const startSceen=document.getElementById("start-screen");
const resultScreen=document.getElementById("result-screen");

const questionBox=document.getElementById("question-box")

const optionBox= document.getElementById("options-box");
const categorySelect=document.getElementById("category-select");

let currentIndex=0;
let score=0;
let quizQuestions=[];
let timer;
let timeLeft=10;

startBtn.addEventListener("click",()=>{
    const category=categorySelect.value;
    if(!category){
        return alert("Please Select one category");
    }
    quizQuestions=questions.filter(q=>q.category===category);
    quizQuestions=quizQuestions.sort(()=>0.5-Math.random()).slice(0,10);

    startSceen.style.display="none";
    quizScreen.style.display="block";
    showQuestions();
})

function showQuestions(){
    clearInterval(timer);
    timeLeft=10;
    document.getElementById("time").innerText=timeLeft;
    timer=setInterval(()=>{
        timeLeft--;
        document.getElementById("time").innerText=timeLeft;
        if(timeLeft===0){
            clearInterval(timer);
            nextQuestion();
        }
    },1000);
    const q= quizQuestions[currentIndex];
    questionBox.innerText=`Q${currentIndex+1}:${q.question}`;
    optionBox.innerHTML="";
    q.options.forEach(option=>{
        const btn=document.createElement("button");
        btn.innerText=option;
        btn.onclick=()=>{
            if(option === q.answer)score++;
            nextQuestion();
        };
       optionBox.appendChild(btn);
    })
}

function nextQuestion(){
  currentIndex++;
  if(currentIndex<quizQuestions.length){
    showQuestions();
  }else{
    showResult();
  }
}

function showResult(){
    clearInterval(timer);
    quizScreen.style.display="none";
    resultScreen.style.display="block";
    document.getElementById("score").innerText=`${score}/${quizQuestions.length}`;
    let oldScores=JSON.parse(localStorage.getItem("leaderboard")||"[]");
    oldScores.push(score);
    oldScores=oldScores.sort((a,b)=>b-a).slice(0,5);
    localStorage.setItem("leaderboard",JSON.stringify("leaderboard"));
    const leaderboard=document.getElementById("leaderboard");
    leaderboard.innerHTML="";
    oldScores.forEach((s,i)=>{
        const li=document.createElement("li");
        li.innerText=`#${i+1}-${s}points`;
        leaderboard.appendChild(li);
    })
}