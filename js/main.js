

$(document).on('ready', function() {

    // Footer
    var cur_year = new Date().getFullYear();
    $('#currentYear').html(cur_year);

    
    $('.avatar').hover(function() {
        $(this).find('.buttons').addClass('bounceIn');
    }, function() {
        $(this).find('.buttons').removeClass('bounceIn');
    });

    $('#owl-carousel').owlCarousel({
        // navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        responsive: true,
        singleItem: true,
        stopOnHover: true,
        autoPlay: true
    });

    $('.js_go-to-scroll').click(function(e) {

        var id = $(this).attr('id');
        var scroll_offset = $('#marker_' + id ).offset().top - 200;

        if (id === 'about') {
            $("body").velocity("scroll", { easing: 'easeIn', duration: 750, offset: scroll_offset + 33 })
        }

        else {
            $("body").velocity("scroll", { easing: 'easeIn', duration: 750, offset: scroll_offset })
        }
        e.preventDefault();
    });

});