var lightsOn = false;
// //************SPECIAL EFFECTS ON PAGE***************

$(document).ready(function() {
  $( 'body' ).fadeIn( 2000, function(){
 });


// //******** NAV SWITCH ON SCROLL*******************


$(window).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.nav').addClass('fade');
  } else {
    $('.nav').removeClass('fade');
  }
  // if y is greater than the top of each section
  // using .offset().top
});

});
// //********LIGHTS ON / LIGHTS OFF BUTTON*************

$('.lightson').on('click', toggleLight);

function toggleLight(){
  if (!lightsOn) {
    switchLight();
    lightsOn = true;
  } else {
    switchDark();
    lightsOn = false;
  }
}

function switchLight(){

  $('body').css({
    color:'black',
    background: '#f0f9ff',
    background: '-moz-linear-gradient(top,  #f0f9ff 0%, #cbebff 47%, #2ba0c4 100%)',
    background: '-webkit-linear-gradient(top,  #f0f9ff 0%,#cbebff 47%,#2ba0c4 100%)', 
    background: 'linear-gradient(to bottom,  #f0f9ff 0%,#cbebff 47%,#2ba0c4 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#f0f9ff", endColorstr="#2ba0c4",GradientType=0 )', 
  });
  $('.janiepenney').css({
    color: 'black',
  });
  //still white
  $('.toggle').css({
    color: 'black',
  });
   $('.lightson').html("lights off!")
}

function switchDark(){
  $('body').css({
    color: 'white',
    background: '#000000', /* Old browsers */
    background: '-moz-linear-gradient(top,  #000000 0%, #354d7c 100%)', /* FF3.6-15 */
    background: '-webkit-linear-gradient(top,  #000000 0%,#354d7c 100%)', /* Chrome10-25,Safari5.1-6 */
    background: 'linear-gradient(to bottom,  #000000 0%,#354d7c 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#000000", endColorstr="#354d7c",GradientType=0 )', /* IE6-9 */
    fontFamily: 'Sorts Mill Goudy', serif,
  });
  $('.lightson').html("lights on!")
}



//*********** NAV BUTTON AUTO SCROLL****************

$('#about-btn').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({
       scrollTop: $('.about-section').offset().top // minus header height
   }, 1500);
});

$('#work-btn').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({
       scrollTop: $('.work').offset().top
   }, 1200);
});

$('#contact-btn').on('click', function(event) {
   event.preventDefault();
   $('html, body').animate({
       scrollTop: $('.contact').offset().top
   }, 1000);
});

//*******NAV HIGHLIGHTS************//
var url = window.location.href; 

$('.navtext a').each(function() {
    if(url == (this.href)) { 
      $(this).closest("li").addClass("active");
      }
   });


//******SLICK CAROUSEL IMAGES**********
//  
 $(document).ready(function(){
$('.photos').slick({
  centerMode: true,
  slidesToShow: 2,
  centerPadding: '60px',
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});

// on scroll, show paralLax affect - each component loading a bit different times

// add a video with iframe

// on submit of contact form, send email to janie's gmail account

// make sure all works responsively

// margin between photos is too large

// add more photos 

// why is image hover not consis