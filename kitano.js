const quiz=document.getElementsByClassName("quiz")
const answer=document.getElementsByClassName("answer")



for(let i=0;i<quiz.length;i++){
    quiz[i].onclick=function(){
        if(answer[i].style.display==="none"|| answer[i].style.display === ""){
            answer[i].style.display="block"
            answer[i].style.display="inline"
            quiz[i].value="隠す"
        } else{
            answer[i].style.display="none"    
            quiz[i].value="答え"
        }
    }
}


