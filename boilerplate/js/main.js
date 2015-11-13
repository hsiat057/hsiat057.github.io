var cats = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.png"];

var words = ["hello","world","lorem","ipsum"];

for (var increment = 0; increment < 100; increment++) {
  $("body").append('<div class="button"></div>');
}

var randomCat = cats[Math.floor(Math.random()*4)];

$("body").append("<img src='img/" + randomCat + "'>");


function makePattern() {
    $(".button").each(function() {
  var topPosition = Math.floor(Math.random()*($(window).height()-100)) + "px";
  var leftPosition = Math.floor(Math.random()*($(window).width()-100)) + "px";
  $(this).css("top",topPosition).css("left",leftPosition);
  var newColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  $(this).css("background-color",newColor);
  var newSize = Math.floor(Math.random()*300) + "px";
  $(this).css("width",newSize).css("height",newSize);

});

}

$(window).resize(function() {
  makePattern();
});

$(".activate").click(function(){
  makePattern();
})


for (var myPoem = 0; myPoem < 5; myPoem++) {
  $(".poem").append(words[Math.floor(Math.random()*words.length)]  + " ");
  
}
