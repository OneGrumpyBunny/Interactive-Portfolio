$(document).ready(function(){
        // about me fader
        $('.learnmore.fa-chevron-right').click(function() {
            $(".about").addClass("moveToTop");
            $(this).parent().fadeOut("slow");
            $(this).parent().next('.atwork').delay(600).fadeIn("slow");
        });

        $('.learnmore.fa-chevron-left').click(function() {
            $(this).parent().fadeOut("slow");
            $(this).parent().prev('.atwork').delay(600).fadeIn("slow");
        });
        
        // slow scroll
        $('a[href^="#"]').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if( target.length && target.selector != "#education-slider" && target.selector != "#experience-slider") {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        });

        // portfolio hover
        $(".portBox").mouseenter(function() {
            var thisDesc = $(this).children(".description");
            thisDesc.css("background", thisColor);
            
            $(this).children("p").toggleClass("hideme").toggleClass("showme");
        });
        $(".portBox").mouseout(function() {
            $(this).children("p").toggleClass("showme").toggleClass("hideme");
        });

        // background video

        /*    scaleVideoContainer();
        
            initBannerVideoSize('.video-container .poster img');
            initBannerVideoSize('.video-container .filter');
            initBannerVideoSize('.video-container video');
        
            $(window).on('resize', function() {
                scaleVideoContainer();
                scaleBannerVideoSize('.video-container .poster img');
                scaleBannerVideoSize('.video-container .filter');
                scaleBannerVideoSize('.video-container video');
            });
        
        
        function scaleVideoContainer() {
        
            var height = $(window).height() + 5;
            var unitHeight = parseInt(height) + 'px';
            $('.homepage-hero-module').css('height',unitHeight);
        
        }
        
        function initBannerVideoSize(element){
        
            $(element).each(function(){
                $(this).data('height', $(this).height());
                $(this).data('width', $(this).width());
            });
        
            scaleBannerVideoSize(element);
        
        }
        
        function scaleBannerVideoSize(element){
        
            var windowWidth = $(window).width(),
            windowHeight = $(window).height() + 5,
            videoWidth,
            videoHeight;
        
            // console.log(windowHeight);
        
            $(element).each(function(){
                var videoAspectRatio = $(this).data('height')/$(this).data('width');
        
                $(this).width(windowWidth);
        
                if(windowWidth < 1000){
                    videoHeight = windowHeight;
                    videoWidth = videoHeight / videoAspectRatio;
                    $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});
        
                    $(this).width(videoWidth).height(videoHeight);
                }
        
                $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
        
            });
        }*/
});