$('.video-slider').slick({
    // infinite: true,
    // autoplay: true,
    centerMode: true,
    arrows: true,
    centerPadding: '70px',
    variableWidth: true,
    dots: true,
    slidesToShow: 5,
    responsive: [{
            breakpoint: 1000,
            settings: {
                infinite: true,
                autoplay: true,
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
                variableWidth: true
            }
        },


        {
            breakpoint: 500,
            settings: {
                infinite: true,
                autoplay: true,
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                variableWidth: false
            }
        }
    ]
});