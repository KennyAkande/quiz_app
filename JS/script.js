$(document).ready(function () {
    let timeleft = 11;
    let timer;
    let currentQuestion = 1;
    let score = 0;
    function startTimer() {
        clearInterval(timer)
        timeleft = 10;
        timer = setInterval(function () {
            timeleft--;
            $(".display" + currentQuestion + " .time").text(timeleft);

            if (timeleft <= 0) {
                clearInterval(timer);
                $(".display" + currentQuestion).hide();
                currentQuestion++;
                $(".display" + currentQuestion).fadeIn(300);
                startTimer();
            }
        }, 1000);
    }
    function showResult() {
        if (score > 5) {
            $(".resultDisplay").fadeIn();
            $(".resultDisplay .score").text(score);
        } else {
            $(".resultDisplayLoser").fadeIn();
            $(".resultDisplayLoser .score").text(score);
        }
    }
    $(".clicky").click(function () {
        $(".main").fadeOut(300, function () {
            $(".display1").fadeIn(300);
            startTimer();
        });
    });
    $(".option").click(function () {
        if ($(this).hasClass("correct")) {
            score++;
        }
        $(".display" + currentQuestion).fadeOut(300, function () {
            currentQuestion++;

            if ($(".display" + currentQuestion).length > 0) {
                $(".display" + currentQuestion).fadeIn(300);
                startTimer();
            } else {
                showResult();
            }
        });
        clearInterval(timer);
    })
});
