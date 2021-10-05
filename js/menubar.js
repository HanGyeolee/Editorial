$(document).ready(function() { 
    // 9시간 10분 + 6시간 21분 + 6시간 45분
    // 참고 사이트 : https://html5up.net/editorial
    // 아이콘 : https://fontawesome.com/v5.15/icons/paper-plane?style=solid
    if(window.innerWidth >= 1280){
        $('body>div').css({height:'auto'});
        $('aside').css({height:'auto'});
        $('body>div').css({'overflow':'visible'});
        $('.scrollable').css({'height':'auto', 'overflow':'visible'});
        $('aside').addClass('active');
        $('body>div').removeClass('active');
    }else{
        $('aside').css({height:window.innerHeight});
        $('body>div').css({height:window.innerHeight});
        $('body>div').css({'overflow-x':'visible', 'overflow-y':'scroll'});
        $('.scrollable').css({'height':window.innerHeight,'overflow-x':'hidden', 'overflow-y':'scroll'});
        $('aside').removeClass('active');
        $('body>div').addClass('active');
    }
    
    $('div.subtitle').click(function() {
        var child = $(this).children('.listbox');
        if(child.hasClass('active')){
            $(this).children('.arrow').css({transform: 'rotate(225deg)'});
            child.removeClass('active');
        }
        else{
            $(this).children('.arrow').css({transform: 'rotate(45deg)'});
            child.addClass('active');
        }
    })

    $('body').children().not('aside').click(function(){
        if($('aside').hasClass('active')){
            if(window.innerWidth > 1280){
                $('aside').removeClass('active');
                $('body>div').addClass('active');
            }else{
                $('aside').removeClass('active');
            }
        }
    })

    $('.hamburger').click(function(){
        if($('aside').hasClass('active')){
            if(window.innerWidth > 1280){
                $('aside').removeClass('active');
                $('body>div').addClass('active');
            }else{
                $('aside').removeClass('active');
            }
        }
        else{
            if(window.innerWidth > 1280){
                $('aside').addClass('active');
                $('body>div').removeClass('active');
            }else{
                $('aside').addClass('active');
            }
        }
    })
});

$(window).resize(function(){
    if(window.innerWidth >= 1280){
        $('body>div').css({height:'auto'});
        $('aside').css({height:'auto'});
        $('body>div').css({'overflow':'visible'});
        $('.scrollable').css({'height':'auto', 'overflow':'visible'});
        $('aside').addClass('active');
        $('body>div').removeClass('active');
    }else{
        $('aside').css({height:window.innerHeight});
        $('body>div').css({height:window.innerHeight});
        $('body>div').css({'overflow-x':'visible', 'overflow-y':'scroll'});
        $('.scrollable').css({'height':window.innerHeight,'overflow-x':'hidden', 'overflow-y':'scroll'});
        $('aside').removeClass('active');
        $('body>div').addClass('active');
    }

    if(window.innerWidth <= 920)
        $('.bigtitle').html("Hi, I'm Editorial by HTML5 UP");
    else
        $('.bigtitle').html("Hi, I'm Editorial <br> by HTML5 UP");
})