for (var increment = 0; increment < 50; increment++) {
  $("body").append('<div class="moons"> </div>');
}

$(".moons").mouseover(function(){
    $(".moons").css("background-color", "slategray");
        var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
        var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
        $(this).css("left",leftPosition);
        var newColor = '#' + Math.floor(Math.random()*6902037595864385).toString(20);
  $(this).css("border-color",newColor);
});


$(window).click(function() {
    $(".moons").each(function() {
        var leftPosition = Math.floor(Math.random()*($(window).height()-60)) + "px";
        var topPosition = Math.floor(Math.random()*($(window).width()-50)) + "px";
        var topPosition = Math.floor(Math.random()*($(window).width()-50)) + "px";
        $(this).css("left",leftPosition).css("top",topPosition);
    });
});
    var logoHeight = $('moons').height();
    if (logoHeight < 104) {
        var margintop = (104 - logoHeight) / 2;
        $('moons').css('margin-top', margintop);
    }