$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "от " + ui.values[ 0 ] + " - до " + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "от " + $( "#slider-range" ).slider( "values", 0 ) +
      " - до " + $( "#slider-range" ).slider( "values", 1 ) );
  } );

  $( function() {
    $('.filter > ul > li').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    });
    return false;
  });

  $( function() {
    $('.spisok > ul > li').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    });
    return false;
  });

  $( function() {
    $('.menuclick').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    });
    return false;
  });