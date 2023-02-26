const questions = [
    {
      text: "What video game has a Super monkey?",
      a: "BTD6",
      b: "Minecraft",
      c: "Pokemon",
      d: "Roblox",
      answer: "button1" },
    {
      text: "What cousin is the oldest?",
      a: "Owen",
      b: "Beau",
      c: "Evie",
      d: "Freeman",
      answer: "button4" }
];
let score = 0;
let currentQuestion = 0;

function showQuestion(question) {
    document.getElementById("question").innerText = question.text;
    document.getElementById("button1").innerText = question.a;
    document.getElementById("button2").innerText = question.b;
    document.getElementById("button3").innerText = question.c;
    document.getElementById("button4").innerText = question.d;
    document.getElementById("answer").innerText = "";
}

function buttonClickedEventListener(event) {
    const buttonId = event.target.id;
    const currentAnswer = questions[currentQuestion].answer;
    if (buttonId === currentAnswer) {
        score = score + 1;
        document.getElementById("answer").innerText = "Correct";
        document.getElementById("score").innerText = score;
    } else {
        document.getElementById("answer").innerText = "Wrong";
        document.getElementById("score").innerText = score;
    }
    console.log("Next Question TO");
    setTimeout(() => {
        console.log("Next Question");
        if (currentQuestion + 1 < questions.length) {
            currentQuestion++;
            showQuestion(questions[currentQuestion]);
        } else {
            document.getElementById("button1").remove();
            document.getElementById("button2").remove();
            document.getElementById("button3").remove();
            document.getElementById("button4").remove();
        }
    }, 2000);
    
}


document.getElementById("button1").addEventListener("click", buttonClickedEventListener);
document.getElementById("button2").addEventListener("click", buttonClickedEventListener);
document.getElementById("button3").addEventListener("click", buttonClickedEventListener);
document.getElementById("button4").addEventListener("click", buttonClickedEventListener);
showQuestion(questions[0]);