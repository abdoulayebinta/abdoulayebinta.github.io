$(document).ready(function(){

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top;
            if ( sectionOffset <= scrollbarLocation ) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
});


$('.myRole').hover(
    function() {
        $(this).html("<strong>Welcome to my personal web site!</strong>");
    }, 
    function() {
        $(this).html("<h4>I am Abdoulaye Binta Bah</h4>");
});