var i = 0
$(function () {
    $("button").click(function () {
        i++;
        switch (i) {
            case 1:
                active_switch();
                $('#audio_syukka').get(0).currentTime = 0;
                $('#audio_syukka').get(0).play();
                $('#button').text("どっち!?");
                break;
            case 2:
                active_switch();
                $('#audio_syukka').get(0).pause();
                $('#audio_syukka').get(0).currentTime = 0;
                $('#audio_docchi').get(0).play();
                $('#button').text("ふぅぅーっ!");
                break;
            case 3:
                active_switch();
                $('#audio_docchi').get(0).pause();
                $('#audio_docchi').get(0).currentTime = 0;
                $('#audio_hu').get(0).play();
                $('#button').text("せぇぇーっ!");
                break;
            case 4:
                active_switch();
                $('#audio_hu').get(0).pause();
                $('#audio_hu').get(0).currentTime = 0;
                $('#audio_se').get(0).play();
                $('#button').text("ぐぅっ！!");
                break;
            case 5:
                active_switch();
                $('#audio_se').get(0).pause();
                $('#audio_se').get(0).currentTime = 0;
                $('#audio_gu').get(0).play();
                $('#button').text("ぅわたぁ!!");
                break;
            case 6:
                active_switch();
                $('#audio_gu').get(0).pause();
                $('#audio_gu').get(0).currentTime = 0;
                $('#audio_wata').get(0).play();
                $('#button').text("ハッ");
                break;
            case 7:
                active_switch();
                $('#audio_wata').get(0).pause();
                $('#audio_wata').get(0).currentTime = 0;
                $('#audio_ha').get(0).play();
                $('#button').text("もう一回ふせぐ？");
                break;
            default:
                $('#audio_ha').get(0).pause();
                $('#audio_ha').get(0).currentTime = 0;
                active_reset();
                // voice_reset();
                $('#button').text("出荷をふせぐ？");
        }
    });

    $("#closeModal, #modalBG").click(function(){
        $("#modalArea").fadeOut();
    });

    function active_switch() {
        $('li:nth-child(' + i + ')').removeClass("active");
        $('li:nth-child(' + (i + 1) + ')').addClass("active");
        console.log(i);
    }

    function active_reset() {
        $('li:nth-child(' + (i) + ')').removeClass("active");
        $('li:nth-child(1)').addClass("active");
        i = 0;
        console.log("reset");
    }

    function voice_reset() {
                $('#audio_syukka').get(0).currentTime = 0;
                $('#audio_docchi').get(0).currentTime = 0;
                $('#audio_hu').get(0).currentTime = 0;
                $('#audio_se').get(0).currentTime = 0;
                $('#audio_gu').get(0).currentTime = 0;
                $('#audio_wata').get(0).currentTime = 0;
                $('#audio_ha').get(0).currentTime = 0;
    }
});