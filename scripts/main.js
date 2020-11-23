$(document).ready(function () {
    //show block
    $('.more-info__btn').click(function () {
        $('.interests').slideToggle(300, function () {
            if ($(this).is(':hidden')) {
                $('.more-info__btn').html('More information').removeClass('rotate-arrow');
            } else {
                $('.more-info__btn').html('Hide information').addClass('rotate-arrow');
            }
        });
        return false;
    });

    //open submenu
    $('.submenu').hide();
    $('.nav-item:has(".submenu")').hover(
        function(){
        $(this).find('.submenu').stop().fadeToggle(100);}
    );

    //change button
    $('.header-search__input').on('keyup', function(){
        let $this = $(this),
            val = $this.val();
        
        if (val.length >= 1) {
          $('.header-search__close-btn').show(100);
          $('.header-search__btn').hide();
        } else {
          $('.header-search__btn').show(100);
          $('.header-search__close-btn').hide();
        }
    });
    $('.header-search__close-btn').click(function () {
        $('.header-search__input').val('');
        let val = $('.header-search__input').val();
        if (val.length == 0) {
            $('.header-search__btn').show(100);
            $('.header-search__close-btn').hide();
        }
    });
});