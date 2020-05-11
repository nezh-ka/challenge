(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).toggleClass('menu_state_open');
      $('.menu').toggleClass('menu_state_open');
      $('header').toggleClass('menu_state_open');
    });
  });

  // svg
  $('img.img-svg').each(function(){
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function(data) {
      var $svg = $(data).find('svg');
      if(typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass+' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });

})(jQuery);

     $(".dial").knob();
     $({animatedVal: 0}).animate({animatedVal: 72}, {
        duration: 2000,
        easing: "swing",
        step: function() { 
            $(".dial").val(Math.ceil(this.animatedVal)).trigger("change"); 
        }   
     }); 
    
    $(".dial1").knob();
     $({animatedVal: 0}).animate({animatedVal: 92}, {
        duration: 2000,
        easing: "swing",
        step: function() { 
            $(".dial1").val(Math.ceil(this.animatedVal)).trigger("change"); 
        }   
     }); 
    
    $(".dial2").knob();
     $({animatedVal: 0}).animate({animatedVal: 95}, {
        duration: 2000,
        easing: "swing",
        step: function() { 
            $(".dial2").val(Math.ceil(this.animatedVal)).trigger("change"); 
        }   
     }); 


function slideOpacity(){
  $('.owl-carousel .owl-item.opacity').removeClass('opacity');
  $('.owl-carousel .owl-item.active').eq(-1).addClass('opacity');
}


/* (function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).toggleClass('menu_state_open');
      $('.menu').toggleClass('menu_state_open');
      $('header').toggleClass('menu_state_open');
    });
  });
})(jQuery);
 (function($){
        $(function() {
            $('.menu__icon').on('click', function() {
                $(this).toggleClass('menu_state_open');
                $('.menu').toggleClass('menu_state_open');
                $('header').toggleClass('menu_state_open');
            });
        });
    })(jQuery);
(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).toggleClass('menu_state_open');
      $('.menu').toggleClass('menu_state_open');
      $('header').toggleClass('menu_state_open');
    });
  });  
})(jQuery); */

$('.loop').owlCarousel({
    loop:true,
    navText:["",""],
    margin:40,
    responsive:{
      0:{
        nav:true,
        items:1
      },
    	768:{
    		nav:false,
            items:3
        },
        992:{
        	nav:false,
            items:4
        }
    },

    // onInitialized:slideOpacity,
  	// onTranslated:slideOpacity
});

$('.loop .owl-item').on('click', () => {
  $('#myModal').modal();
});

        
$('#logos').owlCarousel({
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    loop:true
});
 

(function($){
  

  function testAnim(x) {
            $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
        }
        $(function () {
            $('#exampleModal').on('show.bs.modal', function (e) {
                testAnim('wobble');
            })
            $('#exampleModal').on('hide.bs.modal', function (e) {
                testAnim('flipOutX');
            })
            

        });
    
})(jQuery);


(function($){
    $(function() {
  $('.s2 .row .item h3').click(function() {
    if ($(this).hasClass('click1')) {
      $(this).addClass('click-active');
    } else {
      $(this).removeClass('click-active');
    }
    
    $(this).toggleClass('click1');
    return false;
  });
        });
})(jQuery);


   

 
window.onload = function(){ 
    function randomInterval() {
    setTimeout(() => {
        randomInterval();
        document.getElementById('vall-2').innerHTML = (parseInt(document.getElementById('vall-2').innerHTML.replace(/\s+/g, '')) + 1);
    }, Math.random() * (80000 - 10000) + 10000);      
    }
    function randomInterval2() {
    setTimeout(() => {
        randomInterval2();
        document.getElementById('vall-1').innerHTML = (parseInt(document.getElementById('vall-1').innerHTML.replace(/\s+/g, '')) + 1);
    }, Math.random() * (8000 - 1200) + 1200);
    }
    randomInterval();
    randomInterval2();
}