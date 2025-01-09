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

// タイマー更新関数
function updateTimer(targetDateStr) {
    const targetDate = new Date(targetDateStr); // 目標日時を取得

    function calculateTime() {
        const now = new Date(); // 現在日時
        const timeDiff = targetDate - now; // 残り時間（ミリ秒）

        const timerElement = document.getElementById("タイマー");

        if (timeDiff > 0) {
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // 日
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // 時
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // 分
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000); // 秒

            // タイマー要素を更新
            timerElement.textContent = `${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
        } else {
            // 目標時間を過ぎた場合
            timerElement.textContent = "タイムアップ！";
            clearInterval(timerInterval); // タイマーの更新を停止
        }
    }

    // 初回実行
    calculateTime();

    // 1秒ごとにタイマーを更新
    const timerInterval = setInterval(calculateTime, 1000);
}

// 使用例：2026年1月17日午前9時30分までのタイマーを設定
updateTimer("2026-01-17T09:30:00");
