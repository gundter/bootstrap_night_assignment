/**
 * Created by Prime on 4/29/15.
 */
var percent = 0;

$(document).ready(function(){
    setInterval(function(){
        percent += 10;
        if (percent > 100){
            percent = 0;
        }
        $('.progress-bar-success').css("width", (percent + "%"));
        $('.value').text(percent + "%");

    }, 1500);

    $('.twitch').on('click', function(){
       $('.progress-bar').css('width', "33%");
        $('.valueClick').text("33%");
    });
    $('.twitter').on('click', function(){
       $('.progress-bar').css('width', "66%");
        $('.valueClick').text("66%");
    });
    $('.youtube').on('click', function(){
       $('.progress-bar').css('width', "100%");
        $('.valueClick').text("100%");
    });

});