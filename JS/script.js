$(document).ready(function () {
    $(".clicky").click(function () {
        $(".main").fadeOut(300, function () {
            $(".display1").fadeIn(300);
        });
    });
    let timeleft = 11;
    let timer;
    let currentQuestion = 1;

    timer = setInterval(function(){
        timeleft--;
        $(".time").text(timeleft);

        if (timeleft <= 0) {
            clearInterval (timer);
            $(".display" + currentQuestion).hide();
            currentQuestion++;
            $(".display" + currentQuestion).show();
        }
    }, 1000)

});
