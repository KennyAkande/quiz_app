$(document).ready(function () {
    
    let timeleft = 11;
    let timer;
    let currentQuestion = 1;

function startTimer() {
    timeleft = 10;
    clearInterval(timer)

    timer = setInterval(function(){
        timeleft--;
        $(".time").text(timeleft);

        if (timeleft <= 0) {
            clearInterval (timer);
            $(".display" + currentQuestion).hide();
            currentQuestion++;
            $(".display" + currentQuestion).fadeIn(300);
            startTimer();
        }
    }, 1000);
}
   

    $(".clicky").click(function () {
        $(".main").fadeOut(300, function () {
            $(".display1").fadeIn(300);
            startTimer();
        });
    });
});
