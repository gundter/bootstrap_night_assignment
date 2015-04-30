/**
 * Created by Prime on 4/29/15.
 */
var percent = 0;

$(document).ready(function(){
    setInterval(function(){
        percent += 10;
        if (percent > 101){
            percent = 0;
        }
        $('.progress-bar-success').css("width", (percent + "%"));
        $('.progress-bar-success').attr("aria-valuenow", percent);
        $('.value').text(percent + "%");
    }, 1500);

    $('.twitch').on('click', function(){
       $('.progress-bar').css('width', "33%");
        $('.progress-bar').attr('aria-valuenow', "33");
        $('.valueClick').text("33%");
    });

    $('.twitter').on('click', function(){
       $('.progress-bar').css('width', "66%");
        $('.progress-bar').attr('aria-valuenow', "66");
        $('.valueClick').text("66%");
    });

    $('.youtube').on('click', function(){
       $('.progress-bar').css('width', "100%");
        $('.progress-bar').attr('aria-valuenow', "100");
        $('.valueClick').text("100%");
    });

});