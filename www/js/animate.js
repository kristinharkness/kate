
$(function () { 
	var lastPage;


	function init() {
	    lastPage = Math.round($(window).scrollTop() / $(window).height());
	    $('input:radio[name=radio-set]')[lastPage].checked = true;
	    scrollToPage(lastPage);
	}

        function scrollToPage(page) {
            if (lastPage == "0" && page !="0") {
		stop_vimeo();
	    }

	    lastPage = page;
	    if (page == "0") {
		start_reel();
	    }

	    console.log("Last page is now: " + lastPage);
	    $(window).scrollTop(page * $(window).height());
	}

        function deAnimate() {
	    $(".kh-anim-element").addClass('notransition');
	}

        function reAnimate() {
	    $("#kh-scroll").height(); // Trigger a reflow, flushing the CSS changes to the page
	    $(".kh-anim-element").removeClass('notransition'); // Re-enable transitions
	}

        function animateResume(screenWidth, screenHeight, percent) {
            var range = screenWidth * .24,
		posInRange = range * percent,
		currPos = parseInt($('#kh-resume-cloud1').css('left'), 10),
                newPos = Math.round(0 - range + posInRange);
            if (newPos != currPos) {
		console.log("Curr pos = " + currPos + " and new pos = " + newPos);
		$("#kh-resume-cloud1").css({ 'left': newPos,
			    'opacity' : percent});
	    } else {
		console.log("Not moving.");
	    }
	}

	$('input:radio[name=radio-set]').change(function() {
		scrollToPage($(this).val());
	    });

	$(window).resize(function () {
		$(this).scrollTop(lastPage * $(window).height());
	    });

	$(window).scroll(function(e) {

		//if ($('#kh-resume').is(':hover')) {
                //    return;
		//}

		clearTimeout($.data(this, "scrollTimer"));
		$.data(this, "scrollTimer", setTimeout(function() {
			    // reset scroll to top of page
			    $(this).scrollTop(lastPage * $(window).height());
			    reAnimate();
			    // console.log("Haven't scrolled in 1000ms!");
			}, 1000));
	
		var screenWidth = $(window).width(),
		    screenHeight = $(window).height(),
                    scrollTop = $(this).scrollTop(),
                    page = Math.floor(scrollTop / screenHeight),
                    pagePosition = scrollTop % screenHeight,
		    pagePercent = pagePosition / screenHeight;

		if (page != lastPage) {
		    $('input:radio[name=radio-set]')[page].checked = true;
                    scrollToPage(page);
		    reAnimate();
		} else {
		    // move the animation
		    deAnimate();
                    if (page == 1) {
			animateResume(screenWidth, screenHeight, pagePercent);
		    }
		}

		// Update our cheat-y window
		$("#scroll-position").text( "scrollTop: " + $(window).scrollTop() + ". Page position: " + pagePosition);
	    }); 

	init();

    });


