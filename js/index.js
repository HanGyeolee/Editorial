$(window).resize(function(){
    if(window.innerWidth <= 920)
        $('.bigtitle').html("Hi, I'm Editorial by HTML5 UP");
    else
        $('.bigtitle').html("Hi, I'm Editorial <br> by HTML5 UP");
})