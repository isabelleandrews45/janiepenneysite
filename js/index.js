
//******** NAV SWITCH ON SCROLL*******************

// $(document).ready(function() {
//     $(window).scroll( function(){
//         $('.navscroll').each( function(i){
//             var bottom_of_object = $(this).position().top + $(this).outerHeight();
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//             if( bottom_of_window > bottom_of_object ){
//                 $(this).animate({'opacity':'1'},500);
//             }
//         }); 
//     });
// });

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.navscroll').fadeIn();
  } else {
    $('.navscroll').fadeOut();
  }
});


//********LIGHTS ON / LIGHTS OFF BUTTON*************

// $('.lightson').on('click', switchLight)

// function switchLight(){
//   $('body').css({
//     color:'black',
//     background: '#f0f9ff',
//     background: '-moz-linear-gradient(top,  #f0f9ff 0%, #cbebff 47%, #2ba0c4 100%)',
//     background: '-webkit-linear-gradient(top,  #f0f9ff 0%,#cbebff 47%,#2ba0c4 100%)', 
//     background: 'linear-gradient(to bottom,  #f0f9ff 0%,#cbebff 47%,#2ba0c4 100%)',
//     filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#f0f9ff", endColorstr="#2ba0c4",GradientType=0 )', 
//     backgroundImage: url(../images/roadnav.png); 
    // });
// });

// $('.lighston').click(function(){
//     $('lightson').html("lights off!")
//   });

// // $('.lightsoff')
// $('.lightsoff').on('click', switchDark)

// function switchDark(){
//   $('body').css({
//     color: 'white',
//     background: '#000000', /* Old browsers */
//     background: '-moz-linear-gradient(top,  #000000 0%, #354d7c 100%)', /* FF3.6-15 */
//     background: '-webkit-linear-gradient(top,  #000000 0%,#354d7c 100%)', /* Chrome10-25,Safari5.1-6 */
//     background: 'linear-gradient(to bottom,  #000000 0%,#354d7c 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
//     filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#000000", endColorstr="#354d7c",GradientType=0 )', /* IE6-9 */
//     fontFamily: 'Sorts Mill Goudy', serif,
//   });

// $('.lighston').click(function(){
// $('lightson').html("lights on!")
//   });


//*********** NAV BUTTON AUTO SCROLL****************

$('#about-btn').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({
       scrollTop: $('#about-section').offset().top
   }, 1500);
});

$('#work-btn').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({
       scrollTop: $('#work-section').offset().top
   }, 1200);
});

$('#contact-btn').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({
       scrollTop: $('#contact-section').offset().top
   }, 1000);
});

//************SPECIAL EFFECTS ON PAGE***************

$(document).ready(function() {
  $( '.janiepenney' ).fadeIn( "slow", function(){
 });
});

//***********PHOTO GRID*****************

$('.grid').masonry({
  // itemSelector: '.grid-item',
  fitWidth: true,
  resize: true,
});





// on scroll, show paralLax affect - each component loading a bit different times

// on click of "all", "videos", and "photos", toggle between content below

// on submit of contact form, send email to janie's gmail account

// on click of any social icon, lead to appropriate social page