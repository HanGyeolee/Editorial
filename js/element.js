$(document).ready(function() { 
    if(window.innerWidth <= 736){
        $('.earlyhalf>ul.None.left>li')
            .children().not(':first, :last')
                .css({display:'none'});
    }
    else
        $('.earlyhalf>ul.None.left>li')
            .children().not(':first, :last')
                .css({display:'flex'})
})

$(window).resize(function(){
    if(window.innerWidth <= 736)
        $('.earlyhalf>ul.None.left>li')
            .children().not(':first, :last')
                .css({display:'none'})
    else
        $('.earlyhalf>ul.None.left>li')
            .children().not(':first, :last')
                .css({display:'flex'})
})