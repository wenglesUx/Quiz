let currentQuestion =0;
let correctAnswers = 0;
showquestion()

document.querySelector('.scoreArea button').addEventListener('click', reset);
function showquestion(){
    if(questions[currentQuestion]){
        let q = questions[currentQuestion]

        
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';
    
        document.querySelector('.question').innerHTML = q.question;
        let optionsHtml ='';
         for(let i in q.options){
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span> ${q.options[i]}</div>`;
         }
         document.querySelector('.options').innerHTML = optionsHtml;

         document.querySelectorAll('.options .option').forEach(item =>{
            item.addEventListener('click',eventClick)
            
         });

    }else{
        finish()
    }
}
function eventClick(e){
let clicked = parseInt(e.target.getAttribute('data-op'));

if(questions[currentQuestion].answer === clicked) {
    
    correctAnswers++;
}

currentQuestion++;
showquestion();
}
function finish(){
    let points = Math.floor((correctAnswers / questions.length) * 100);
    console.log(points)
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswers}.`;
    

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
}
function reset(){
    currentQuestion =0;
    correctAnswers = 0;
    showquestion()

}