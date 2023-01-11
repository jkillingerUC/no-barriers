// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// your functions go here
	
	});
	
	
	/* optional triggers
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		
	});
	
	*/


     if( navigator.userAgent.indexOf('iPad') == -1 )
     { 
      var shrinkHeader = 120;
      $(window).scroll(function() {
        var scroll = getCurrentScroll();
        if ( scroll >= shrinkHeader ) {
         $('.header').addClass('shrink');
       }
       else {
        $('.header').removeClass('shrink');
      }
    });
      function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
      }

      var $quote = $('.quote p span');
      var $icon = $('.icon');
      var $brick1 = $('#brick1');

/* 
function ScrollStart(){
  console.log('started ' + window.pageYOffset)
}
*/
$(window).scroll(function(){

            //console.log("Scroll Top: " + $(window).scrollTop());
            var statement1 = $('#feature1 .statement'),
            st = $(window).scrollTop(),
            wh = $(window).height();
            wh = $(window).height(),
            dt = $(document).scrollTop(),
            empower = $('#feature2 .statement')
            empowerLeft = empower.css('left');
            empowerNum = parseInt(empowerLeft, 10);

            enrich = $('#feature3 .statement');

            //redView  = wh - (r.offset().top - dt),
            //blueView = wh - (b.offset().top - dt)
            familyView = wh - (statement1.offset().top - st +800)

            colWidth = $('.col-md-5').width();

            if($(window).scrollTop() <= 0){
              $quote.css('opacity', '.25');
            }else{
              $quote.css('opacity', ($(window).scrollTop()*.009));
            }

            if($(window).scrollTop() <= 0){
              $brick1.css({'transform':'rotate(0deg)', 'left': '0}'});
            }else{
              $brick1.css({'transform': 'rotate(' + ($(window).scrollTop()) + 'deg)', 'margin-top': ($(window).scrollTop()*-.5)+'px', 'left': ($(window).scrollTop()/-2)+'px'});
            }


            if($(window).scrollTop() <= 300){
            	empower.css({'left' : colWidth +50 +'px'});
            }else if($(window).scrollTop() > 300){
            	empower.css({'left': Math.max(0, (colWidth-(st/2.4)))+'px'});
              //console.log('over 300 ' + Math.max(0,(colWidth-(st/2.4)))+'px');
            }
            //console.log(st)

            if($(window).scrollTop() >= 1400){
            	enrich.css({'left': Math.min(0, ($(window).scrollTop()/5)-500 )+ 'px'});
              //console.log(-($(window).scrollTop()/5));
            }

            if($(window).scrollTop() <= 0){
              statement1.css({'opacity': 1, 'left' : 0});
            }else{
              statement1.css({'opacity' : 1 - Math.min(1 / wh * familyView), 'left' : -dt});
            }
            //console.log($(window).scrollTop());

            $(".bar#bar1").css({'left' : ($(window).scrollTop()*.5)+'px'});
            $('.bar#bar2').css({'left' : ($(window).scrollTop()*1.15+200)+'px'});
            $('.bar#bar3').css({'left' : ($(window).scrollTop()*.3+100)+'px'});
            $('.bar#bar4').css({'left' : ($(window).scrollTop()*.2)+'px'});

            $(".bar#bar5").css({'right' : ($(window).scrollTop()*.5+400)+'px'});
            $('.bar#bar6').css({'right' : ($(window).scrollTop()*1.15+200)+'px'});
            $('.bar#bar7').css({'right' : ($(window).scrollTop()*.3+100)+'px'});
            $('.bar#bar8').css({'right' : ($(window).scrollTop()*.2)+'px'});

            $(".bar#bar9").css({'left' : ($(window).scrollTop()*.75+15)+'px'});
            $('.bar#bar10').css({'left' : ($(window).scrollTop()*1.15+65)+'px'});
            $('.bar#bar11').css({'left' : ($(window).scrollTop()*.3+165)+'px'});
            $('.bar#bar12').css({'left' : ($(window).scrollTop()*.2+225)+'px'});

            $(".bar#bar13").css({'right' : ($(window).scrollTop()*.5+135)+'px'});
            $('.bar#bar14').css({'right' : ($(window).scrollTop()*1.15+35)+'px'});
            $('.bar#bar15').css({'right' : ($(window).scrollTop()*.3+35)+'px'});
            $('.bar#bar16').css({'right' : ($(window).scrollTop()*.2+135)+'px'});

            $('#cir1').css({'transform' : 'rotate(' +($(window).scrollTop())/3 + 'deg)'})
            $('#cir2').css({'transform' : 'rotate(' +($(window).scrollTop())/4 + 'deg)'})
            $('#cir3').css({'transform' : 'rotate(' +($(window).scrollTop())/6 + 'deg)'})


/* 
                      if($quote.css('right') < 0 +'px' ){
                        console.log($quote.css('right'));
                       $quote.css('right', ($(window).scrollTop()*10)-1000 + 'px');
                      
                      }else if($quote.css('right') >= 0 +'px'){
                     
                        $quote.css('right', ($(window).scrollTop()/8) + 'px');

                      }
                      */

/* 
                      if($icon.css('left') < -236 +'px'){
                        //console.log($icon.css('left'))

                        $icon.css('left', $(window).scrollTop() -400 + 'px');
                      }else {
                        //console.log('hi');
                        $icon.css('left', -237 + 'px')
                      }
                      */

                    });
}



})(window.jQuery);