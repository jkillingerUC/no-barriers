
/*! viewportSize | Author: Tyson Matanich, 2013 | License: MIT */
(function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);

( function( $ ) {

	// Init Skrollr
		var s = skrollr.init({
		    forceHeight: false,
		    render: function(data) {
		    
		        //Debugging - Log the current scroll position.
		        //console.log(data.curTop);
		    }
		});

	
//Create the nav

var sectionTotal = $('section').length;

  $('section').each(function(index) {
  	if(index != sectionTotal - 1){
    $('<a href="#' + $(this).attr('id') + '"> &ordm; </a>').appendTo('nav');
	}
  });


  // For smooth scrolling

  
  $('nav a').click(function(e) {
  	
    e.preventDefault();
    var sectionHeight = $($(this).attr('href')).height();
    var windowHeight = $(window).height();
    var sectionPostion = (windowHeight-sectionHeight)/2;
   
    // Get offset of the section
    //var sectionOffset = $($(this).attr('href')).offset().top;

    var sectionOffset = $($(this).attr('href')).offset().top-sectionPostion;


    if($(this).attr('href') === '#slide-1'){
      var sectionOffset = 0;

    }

    if($(this).attr('href') === '#slide-2'){
    	var sectionOffset = 600;
    }



    // Animate the scroll
    $('body, html').animate({scrollTop: sectionOffset}, 1000, function() {
      return false;
    });
    
  });


  // Highlight nav link depending on section
  $('nav a:first-child').addClass('active');


  $(window).scroll(function() {

    var scrollTop = $(window).scrollTop();    
    var sections = $('section');
    highlight(0);
    
    function highlight(index) {
    	 
      var len = sections.length;
      if (index >= len) {
        return;
      }

      var sectionScroll = $(sections[index]).offset().top;
      var sectionHeight = $(sections[index]).height();
  	  var windowHeight = $(window).height();
  	  var bodyHeight = $('body').height();
  	  var centerView = windowHeight/2;
      var sectionTop = $(sections[index]).offset().top;

      if(scrollTop == 0){
        $('nav a').removeClass('active').blur();
        $('nav a:first-of-type').addClass('active');
      }else if(scrollTop == windowHeight){
      	//var scrollTop == 10000;
      }
      else{
        if(bodyHeight - scrollTop <= bodyHeight - sectionTop+centerView && bodyHeight - scrollTop > bodyHeight - sectionTop) {
      	$('nav a').removeClass('active').blur();
        $('nav a[href=#' + $(sections[index]).attr('id') + ']').addClass('active');
        return;
      }
    }
  	

/* 


      if (sectionScroll >= scrollTop) {
        $('nav a').removeClass('active');
        $('nav a[href=#' + $(sections[index]).attr('id') + ']').addClass('active');
        return;
      }
*/
      highlight(index+1);
    
    }
    
    
  });


/* 
		var boundry = $(window).height()/2;
		
	
	$('main').scrollNav({
			sections: 'h1',
			sectionElem: 'div',
			showHeadline: false,
			subsections: true,
			fixedMargin: 60,
			scrollOffset: boundry,
			arrowKeys: true
		});
		var $item = $('.scroll-nav__item');
		$.each($item, function(){
			$text = $(this).find('a').html().toLowerCase();
			$(this).addClass($text);
		});
/* 
    sections: 'h2',
    subSections: false,
    sectionElem: 'section',
    showHeadline: true,
    headlineText: 'Scroll To',
    showTopLink: true,
    topLinkText: 'Top',
    fixedMargin: 40,
    scrollOffset: 40,
    animated: true,
    speed: 500,
    insertTarget: this.selector,
    insertLocation: 'insertBefore',
    arrowKeys: false,
    onInit: null,
    onRender: null,
    onDestroy: null

});
 */
	
	
    
} )( jQuery );
