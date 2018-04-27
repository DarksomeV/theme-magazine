//Select init
$('select, input[type="file"]').styler();
$('#upload-file-styler').styler('destroy');

// Slick carousel init
$('.trending-carousel').slick({
    arrows:false,
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
});

// Switch product items view
$('.grid-thumbs').on('click', function(){
    // Find cards and remove class row-card
    $('.all-items-container .card').removeClass('row-card');
    $('.all-items-container .col-lg-4').removeClass('col-lg-12');
    $('.grid-list').removeClass('active');
    $('.grid-thumbs').addClass('active');
});

$('.grid-list').on('click', function(){
    // Find cards and add class row-card
    $('.all-items-container .card').addClass('row-card');
    $('.all-items-container .col-lg-4').addClass('col-lg-12 col-md-12');
    $('.grid-list').addClass('active');
    $('.grid-thumbs').removeClass('active');

});