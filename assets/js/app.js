$(function(){

    $("a").click(function(){
        var numeral=this.hash

        $("html,body").animate({
            scrollTop: $(numeral).offset().top -20
        })

        $(".navbar").css({"background-color":"#0dcaf0"})

    });

    $("html,body").scroll(function(){
        $(".navbar").css({"background-color":"#0dcaf0"})
    });
})

