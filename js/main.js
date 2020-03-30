// Slider
$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 16000,
        values: [ 5000, 10000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "от " + ui.values[ 0 ] + " - до " + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "от " + $( "#slider-range" ).slider( "values", 0 ) +
        " - до " + $( "#slider-range" ).slider( "values", 1 ) );
} );

// Spiski
$( function() {
    $('.caracters_item > ul > li').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    });
    return false;
});

