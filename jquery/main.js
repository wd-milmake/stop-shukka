var i = 0
$(function () {
    $("button").click(function () {
        i++;
        switch (i) {
            case 1:
                active_switch();
                $('#audio_syukka').get(0).play();
                break;
            case 2:
                active_switch();
                $('#audio_docchi').get(0).play();
                break;
            case 3:
                active_switch();
                $('#audio_hu').get(0).play();
                break;
            case 4:
                active_switch();
                $('#audio_se').get(0).play();
                break;
            case 5:
                active_switch();
                $('#audio_gu').get(0).play();
                break;
            case 6:
                active_switch();
                $('#audio_wata').get(0).play();
                break;
            case 7:
                active_switch();
                $('#audio_ha').get(0).play();
                break;
            default:
                active_reset();
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
});