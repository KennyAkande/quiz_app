$(document).ready(function () {
    $(".clicky").click(function () {
        $(".main").fadeOut(300, function () {
            $(".display").fadeIn(300);
        });
    });
    let timeleft = 10;
    let timer;

    timer = setInterval(function(){
        timeleft--;
        $("#time").text(timeleft);

        if (timeleft <= 0) {
            clearInterval (timer);
            
        }
    }, 1000)

});
