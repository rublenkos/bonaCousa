$(document).ready(function(){ 


  function parallaxY(event){
    this.querySelectorAll('.layer').forEach(layer => {
      let speed = layer.getAttribute('data-speed');
      layer.style.transform = `translateY(${event.clientY*speed/1500}px)`;
    });
  }
  document.addEventListener('mousemove', parallaxY);

  function parallaxX(event){
    this.querySelectorAll('.layer-x').forEach(layer => {
      let speed = layer.getAttribute('data-speed');
      layer.style.transform = `translateX(${event.clientY*speed/1300}px)`;
    });
  }
  document.addEventListener('mousemove', parallaxX);

	AOS.init();

  $("input[type='tel']").mask("+38(999) 999 - 99 - 99");

  var swiper = new Swiper(".swiper-reviews", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: { 
      768: {
        slidesPerView: 2      
      }
    }
  });

  $('.faq-btn').click(function(e){
  	$(this).parent().toggleClass('js-expand');
  })

	var sectionIds = $('a.scroll-to');
  $(document).scroll(function(){
      sectionIds.each(function(){
        var container = $(this).attr('href');
        var containerOffset = $(container).offset().top;
        var containerHeight = $(container).outerHeight();
        var containerBottom = containerOffset + containerHeight;
        var scrollPosition = $(document).scrollTop();

        if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
            $(this).addClass('active');
        } else{
            $(this).removeClass('active');
        }
    });
  });

  $('.nav-ico').click(function(){
  	$('body').toggleClass('js-open');
  })

  $('a.scroll-to').click(function(){
    $('body').removeClass('js-open');
  })

});

