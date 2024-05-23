var tablet_min  = 768;
    
$(function() {
    $('.faq-box .faq-title table').click(function(){ 
        var x = $(this).find('.icon img');
        if(x.attr('src') == 'assets/images/ic_plus.png') {
            x.attr('src', 'assets/images/ic_minus.png');
            $(this).parent().parent().addClass('faq-box-active');
        } else {
            x.attr('src', 'assets/images/ic_plus.png');
            $(this).parent().parent().removeClass('faq-box-active');
        }
        $(this).parent().parent().find('.faq-text').slideToggle();
    });
    
    $(document).on('click','.menu_item', function(event) {
        
        var target = this.getAttribute('href');
        if(target.substr(0, 1) === '#') {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $(target).offset().top - 20
            }, 1000);
        }
    });
    
    var swiper = new Swiper('.sw', {
        breakpoints: {
            220: {
              slidesPerView: 1
            },
            760: {
                slidesPerView:3,
            }
        },
        
        navigation: {
            nextEl: ".aright",
            prevEl: ".aleft",
         }
    });
    
});
