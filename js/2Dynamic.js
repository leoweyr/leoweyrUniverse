$(document).ready(function () {undefined
    $("#MagicBall").click(function (){
        var audioEle = document.getElementById("music");
        audioEle.src="../assets/music.mp3";
        audioEle.load();
        if (audioEle.paused) {
            audioEle.play();
        }
    });
});






