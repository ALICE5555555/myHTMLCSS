// 移除#about的背景影片
$(function () {  /*document ready一個js檔只要執行一次就可以*/

    //移除行動裝置的背景影片
    if ($(window).width() < 821) {
        $('#about video').remove();
    }

    //交替漢堡按鈕
    $('.hamburger').click(function () {
        //hamburger 交替切換 .is-active
        $(this).toggleClass('is-active');
        //.navigation 交替切換 .show
        $('.navigation').toggleClass('show');
    });

    //滑動自指定位置
    $('.menu a').click(function(){
        let btn = $(this).attr('href');
        let pos= $(btn).offset();
        $('html,body').animate({scrollTop:pos.top},1000);
    });
});