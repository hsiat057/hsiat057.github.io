for (var increment = 0; increment < 50; increment++) {
  $("body").append('<div class="square"> </div>');
}



$(".square").mousemove(function() {
    $(".square").each(function() {
        var number = Math.floor(Math.random()*20);
        console.log(number);
        $(this).html("<img class = 'tile' src='bird-" + number + ".jpg'>");

    });

});

$(window).click(function() {
    $(".bird").each(function() {
        var leftPosition = Math.floor(Math.random()*($(window).height()-60)) + "px";
        var topPosition = Math.floor(Math.random()*($(window).width()-50)) + "px";
        var topPosition = Math.floor(Math.random()*($(window).width()-50)) + "px";
        $(this).css("left",leftPosition).css("top",topPosition);
    });
});
    var logoHeight = $('bird').height();
    if (logoHeight < 104) {
        var margintop = (104 - logoHeight) / 2;
        $('bird').css('margin-top', margintop);
    }