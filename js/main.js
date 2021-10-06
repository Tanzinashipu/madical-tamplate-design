$(document).ready(function(){
  $('.slide_show').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll:1,
autoplay: true,
  autoplaySpeed: 2000,
      dots: true,
      arrows:false,
      fade:true,
});
    
//   couter js
 $('.number').counterUp({
            delay: 10,
            time:1500
        });
    
    	// $.fn.countTo = function (options) {
    	//     options = options || {};

    	//     return $(this).each(function () {
    	//         // set options for current element
    	//         var settings = $.extend({}, $.fn.countTo.defaults, {
    	//             from: $(this).data('from'),
    	//             to: $(this).data('to'),
    	//             speed: $(this).data('speed'),
    	//             refreshInterval: $(this).data('refresh-interval'),
    	//             decimals: $(this).data('decimals')
    	//         }, options);

    	//         // how many times to update the value, and how much to increment the value on each update
    	//         var loops = Math.ceil(settings.speed / settings.refreshInterval),
    	//             increment = (settings.to - settings.from) / loops;

    	//         // references & variables that will change with each update
    	//         var self = this,
    	//             $self = $(this),
    	//             loopCount = 0,
    	//             value = settings.from,
    	//             data = $self.data('countTo') || {};

    	//         $self.data('countTo', data);

    	//         // if an existing interval can be found, clear it first
    	//         if (data.interval) {
    	//             clearInterval(data.interval);
    	//         }
    	//         data.interval = setInterval(updateTimer, settings.refreshInterval);

    	//         // initialize the element with the starting value
    	//         render(value);

    	//         function updateTimer() {
    	//             value += increment;
    	//             loopCount++;

    	//             render(value);

    	//             if (typeof (settings.onUpdate) == 'function') {
    	//                 settings.onUpdate.call(self, value);
    	//             }

    	//             if (loopCount >= loops) {
    	//                 // remove the interval
    	//                 $self.removeData('countTo');
    	//                 clearInterval(data.interval);
    	//                 value = settings.to;

    	//                 if (typeof (settings.onComplete) == 'function') {
    	//                     settings.onComplete.call(self, value);
    	//                 }
    	//             }
    	//         }

    	//         function render(value) {
    	//             var formattedValue = settings.formatter.call(self, value, settings);
    	//             $self.html(formattedValue);
    	//         }
    	//     });
    	// };

    	// $.fn.countTo.defaults = {
    	//     from: 0, // the number the element should start at
    	//     to: 0, // the number the element should end at
    	//     speed: 1000, // how long it should take to count between the target numbers
    	//     refreshInterval: 100, // how often the element should be updated
    	//     decimals: 0, // the number of decimal places to show
    	//     formatter: formatter, // handler for formatting the value before rendering
    	//     onUpdate: null, // callback method for every time the element is updated
    	//     onComplete: null // callback method for when the element finishes updating
    	// };

    	// function formatter(value, settings) {
    	//     return value.toFixed(settings.decimals);
    	// }
    	// }(jQuery));

    	// jQuery(function ($) {
    	//             // custom formatting example
    	//             $('.count-number').data('countToOptions', {
    	//                 formatter: function (value, options) {
    	//                     return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
    	//                 }
    	//             });

    	//             // start all the timers
    	//             $('.timer').each(count);

    	//             function count(options) {
    	//                 var $this = $(this);
    	//                 options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    	//                 $this.countTo(options);
    	//             }
            
            
            //    testimonial js
     $('.testimonial_slider').slick({
        infinite: true,
        slidesToShow:3,
        slidesToScroll:3,
        autoplay:true,
         autoplaySpeed:2000,
        dots:true,
        arrows:false,
         responsive: [
    {
      breakpoint:992,
      settings: {
        slidesToShow:2,
        slidesToScroll:1,
      }
    },
    {
      breakpoint:769,
      settings: {
       slidesToShow:1,
     slidesToScroll:1,
      }
    },
  ]
     });

     //venobox js
    
    $('.venobox').venobox({

        border: '5px',
        bgcolor : '#63D4D8',
        share   : ['facebook', 'twitter', 'download'], 
         titleattr  : 'data-title', 
         autoplay:true,
         numeratio  : true, 

    }); 

    // gallery slide
    $('.veno_slick').slick({
          infinite: true,
          slidesToShow:5,
          slidesToScroll: 1,
          autoplay:true,
          autoplaySpeed:1500,
          dots: true,
          centerMode: true,
          
          arrows:false,
         

              responsive: [
    {
      breakpoint:992,
      settings: {
        slidesToShow:3,
        slidesToScroll:1,
      }
    },
    {
      breakpoint:769,
      settings: {
       slidesToShow:1,
     slidesToScroll:1,
      }
    },
  ]
          
        });
    
//            scrollup to top
       var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1e3,fadeduration:[500,100]},controlHTML:'<img src="images/Screenshot_2.png" />',controlattrs:{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!1},scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var t=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);t="string"==typeof t&&1==jQuery("#"+t).length?jQuery("#"+t).offset().top:0,this.$body.animate({scrollTop:t},this.setting.scrollduration)},keepfixed:function(){var t=jQuery(window),o=t.scrollLeft()+t.width()-this.$control.width()-this.controlattrs.offsetx,s=t.scrollTop()+t.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:o+"px",top:s+"px"})},togglecontrol:function(){var t=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed(),this.state.shouldvisible=t>=this.setting.startline?!0:!1,this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]),this.state.isvisible=!0):0==this.state.shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]),this.state.isvisible=!1)},init:function(){jQuery(document).ready(function(t){var o=scrolltotop,s=document.all;o.cssfixedsupport=!s||s&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest,o.$body=t(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),o.$control=t('<div id="topcontrol">'+o.controlHTML+"</div>").css({position:o.cssfixedsupport?"fixed":"absolute",bottom:o.controlattrs.offsety,right:o.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll to Top"}).click(function(){return o.scrollup(),!1}).appendTo("body"),document.all&&!window.XMLHttpRequest&&""!=o.$control.text()&&o.$control.css({width:o.$control.width()}),o.togglecontrol(),t('a[href="'+o.anchorkeyword+'"]').click(function(){return o.scrollup(),!1}),t(window).bind("scroll resize",function(t){o.togglecontrol()})})}};scrolltotop.init();
    
    //    stickytop menu
    $(window).scroll(function(){
       var scrolling=$(this).scrollTop();
        var sticky=$('.sticky_top');
        if(scrolling>50){
            sticky .addClass('menu_bg');
        }
        else{
              sticky .removeClass('menu_bg');
        }
    });
    
    // Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 50});

 var html_body = $('html, body');
 $('nav a').on('click', function () {
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
         if (target.length) {
             html_body.animate({
                 scrollTop: target.offset().top - 50
             }, 2000);
             return false;
         }
     }
 });
            
            //    preloader js
    $(window).on('load',function(){
        $('.load').delay(1000).fadeOut(1000);
    });
            
//    wow js
            new WOW().init();

             // navbar colspan js
 $(".nav-link").on("click", function(){
   $(".navbar-collapse").collapse("hide");
 });

 
});