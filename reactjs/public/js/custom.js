$('.actove_promo').click(function() {
    $(this).parents('div').next('.text_with_button_outer').slideToggle();
});

$('#bannerslider').owlCarousel({

    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$('#bannerslider1').owlCarousel({

    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('#dealsslider').owlCarousel({

    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 20,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$('#offerslider, #offerslider1, #offerslider2, #offerslider3, #offerslider4').owlCarousel({

    dots: false,
    nav: true,
    autoplay: false,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});



$('.package-hotel-slider').owlCarousel({
    dots: false,
    nav: true,
    autoplay: false,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

/*==== Owl Thumb ====*/
var bigimage = $("#big");
var thumbs = $("#thumbs");
//var totalslides = 10;
var syncedSecondary = true;

bigimage
    .owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: true,
        dots: false,
        loop: true,
        navText: false,
        responsiveRefreshRate: 200,
    })
    .on("changed.owl.carousel", syncPosition);

thumbs
    .on("initialized.owl.carousel", function() {
        thumbs
            .find(".owl-item")
            .eq(0)
            .addClass("current");
    })
    .owlCarousel({
        items: 11,
        dots: false,
        nav: true,
        navText: [
            '<img src="images/white-left-ic.svg">',
            '<img src="images/white-right-ic.svg">'
        ],
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: 1,
        responsiveRefreshRate: 100,
        responsive: {
            0: {
                items: 5
            },
            600: {
                items: 6
            },
            1000: {
                items: 11
            }
        }
    })
    .on("changed.owl.carousel", syncPosition2);

function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
        current = count;
    }
    if (current > count) {
        current = 0;
    }
    //to this
    thumbs
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
        .find(".owl-item.active")
        .first()
        .index();
    var end = thumbs
        .find(".owl-item.active")
        .last()
        .index();

    if (current > end) {
        thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
        thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
}

function syncPosition2(el) {
    if (syncedSecondary) {
        var number = el.item.index;
        bigimage.data("owl.carousel").to(number, 100, true);
    }
}

thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
});
/*==== Owl Thumb ====*/

$(function() {
    $('.selectpicker').selectpicker();
});

function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function() {
        var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-theVideo"),
            videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal + ' button.close').click(function() {
            $(theModal + ' iframe').attr('src', videoSRC);
        });
    });
}

$('.accordion a').click(function() {
    $(this).toggleClass('active');
    $(this).next('.content').slideToggle(400);
});
if ($("#datepicker").length > 0) {
    $("#datepicker").datepicker({
        numberOfMonths: 2,
        showButtonPanel: true,
        // orientation: "top left",
        beforeShow: function(input, inst) {
            let top_align = $('.search_block1 .container').offset().top + $('.search_block1 .container').height() - 10;
            let left_alig = $('.search_block1 .container').offset().left;
            var widget = $(inst.dpDiv);
            console.log(left_alig);
            setTimeout(function() {
                widget.css({ 'left': left_alig + 'px', 'top': top_align + 'px', 'background': +'red' });
            }, 10);
        }
    });

    $("#speed").selectmenu();
    var availableTags = [
        "Ahmedabad",
        "Bombay",
        "Chennai",
        "Darjiling",
        "Kathmandu",
        "Jaypur",
        "Udepur",

    ];
    $("#tags").autocomplete({
        source: availableTags,
        open: function(event, ui) {
            let top_align = $('.search_block1 .container').offset().top + $('.search_block1 .container').height() - 10;
            let left_alig = $('.search_block1 .container').offset().left;
            $('.ui-autocomplete').css({ 'left': left_alig + 'px', 'top': top_align + 'px' });
        }
    });

};

$(".searchguest_block input").click(function() {
    $(".gurstdetail_block").slideToggle();
});

$(window).scroll(function(e) {
    if ($('.newsletterss_block.close_fired').length === 0) {
        if ($(this).scrollTop() > 900) {
            $('.newsletterss_block').fadeIn(500);
        } else {
            $('.newsletterss_block').fadeOut(500);
        }
    }
});

$('.newsletterss_block .close_icon').click(function() {
    $(this).parents('.newsletterss_block').fadeOut(500).addClass('close_fired');
});

$(".payment-sidebar .itinerary-show").click(function() {
    $(".payment-sidebar .review-itinerary").slideToggle();
});

$(".top_header .search_block .mobile-ic").click(function() {
    $(".search_block form").slideToggle();
});

/*===== Nav Slider =====*/
$(document).ready(function() {
    $('.view-all-toogle .view-see-all').click(function() {
        $(this).parents('.hotel-package-detail-box').find('.hotel-view-content-view').slideDown();
    });

    $('.hotel-view-content-view .close-btn-box a').click(function() {
        $(this).parents('.hotel-view-content-view').slideUp();
    });

    var SETTINGS = {
        navBarTravelling: false,
        navBarTravelDirection: "",
        navBarTravelDistance: 150
    }

    document.documentElement.classList.remove("no-js");
    document.documentElement.classList.add("js");

    // Out advancer buttons
    var pnAdvancerLeft = document.getElementById("pnAdvancerLeft");
    var pnAdvancerRight = document.getElementById("pnAdvancerRight");

    var pnProductNav = document.getElementById("pnProductNav");
    var pnProductNavContents = document.getElementById("pnProductNavContents");


    if (pnProductNav) {
        pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
    }

    // Handle the scroll of the horizontal container
    var last_known_scroll_position = 0;
    var ticking = false;

    function doSomething(scroll_pos) {
        pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
    }

    if (pnProductNav) {
        pnProductNav.addEventListener("scroll", function() {
            last_known_scroll_position = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    doSomething(last_known_scroll_position);
                    ticking = false;
                });
            }
            ticking = true;
        });
    }

    if (pnAdvancerLeft) {
        pnAdvancerLeft.addEventListener("click", function() {
            // If in the middle of a move return
            if (SETTINGS.navBarTravelling === true) {
                return;
            }
            // If we have content overflowing both sides or on the left
            if (determineOverflow(pnProductNavContents, pnProductNav) === "left" || determineOverflow(pnProductNavContents, pnProductNav) === "both") {
                // Find how far this panel has been scrolled
                var availableScrollLeft = pnProductNav.scrollLeft;
                // If the space available is less than two lots of our desired distance, just move the whole amount
                // otherwise, move by the amount in the settings
                if (availableScrollLeft < SETTINGS.navBarTravelDistance * 2) {
                    pnProductNavContents.style.transform = "translateX(" + availableScrollLeft + "px)";
                } else {
                    pnProductNavContents.style.transform = "translateX(" + SETTINGS.navBarTravelDistance + "px)";
                }
                // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
                pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition");
                // Update our settings
                SETTINGS.navBarTravelDirection = "left";
                SETTINGS.navBarTravelling = true;
            }
            // Now update the attribute in the DOM
            pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
        });
    }

    if (pnAdvancerRight) {
        pnAdvancerRight.addEventListener("click", function() {
            // If in the middle of a move return
            if (SETTINGS.navBarTravelling === true) {
                return;
            }
            // If we have content overflowing both sides or on the right
            if (determineOverflow(pnProductNavContents, pnProductNav) === "right" || determineOverflow(pnProductNavContents, pnProductNav) === "both") {
                // Get the right edge of the container and content
                var navBarRightEdge = pnProductNavContents.getBoundingClientRect().right;
                var navBarScrollerRightEdge = pnProductNav.getBoundingClientRect().right;
                // Now we know how much space we have available to scroll
                var availableScrollRight = Math.floor(navBarRightEdge - navBarScrollerRightEdge);
                // If the space available is less than two lots of our desired distance, just move the whole amount
                // otherwise, move by the amount in the settings
                if (availableScrollRight < SETTINGS.navBarTravelDistance * 2) {
                    pnProductNavContents.style.transform = "translateX(-" + availableScrollRight + "px)";
                } else {
                    pnProductNavContents.style.transform = "translateX(-" + SETTINGS.navBarTravelDistance + "px)";
                }
                // We do want a transition (this is set in CSS) when moving so remove the class that would prevent that
                pnProductNavContents.classList.remove("pn-ProductNav_Contents-no-transition");
                // Update our settings
                SETTINGS.navBarTravelDirection = "right";
                SETTINGS.navBarTravelling = true;
            }
            // Now update the attribute in the DOM
            pnProductNav.setAttribute("data-overflowing", determineOverflow(pnProductNavContents, pnProductNav));
        });
    }


    if (pnProductNavContents) {
        pnProductNavContents.addEventListener(
            "transitionend",
            function() {
                // get the value of the transform, apply that to the current scroll position (so get the scroll pos first) and then remove the transform
                var styleOfTransform = window.getComputedStyle(pnProductNavContents, null);
                var tr = styleOfTransform.getPropertyValue("-webkit-transform") || styleOfTransform.getPropertyValue("transform");
                // If there is no transition we want to default to 0 and not null
                var amount = Math.abs(parseInt(tr.split(",")[4]) || 0);
                pnProductNavContents.style.transform = "none";
                pnProductNavContents.classList.add("pn-ProductNav_Contents-no-transition");
                // Now lets set the scroll position
                if (SETTINGS.navBarTravelDirection === "left") {
                    pnProductNav.scrollLeft = pnProductNav.scrollLeft - amount;
                } else {
                    pnProductNav.scrollLeft = pnProductNav.scrollLeft + amount;
                }
                SETTINGS.navBarTravelling = false;
            },
            false
        );

        // Handle setting the currently active link
        pnProductNavContents.addEventListener("click", function(e) {
            var links = [].slice.call(document.querySelectorAll(".pn-ProductNav_Link"));
            links.forEach(function(item) {
                item.setAttribute("aria-selected", "false");
            })
            e.target.setAttribute("aria-selected", "true");
        })
    }

    function determineOverflow(content, container) {
        var containerMetrics = container.getBoundingClientRect();
        var containerMetricsRight = Math.floor(containerMetrics.right);
        var containerMetricsLeft = Math.floor(containerMetrics.left);
        var contentMetrics = content.getBoundingClientRect();
        var contentMetricsRight = Math.floor(contentMetrics.right);
        var contentMetricsLeft = Math.floor(contentMetrics.left);
        if (containerMetricsLeft > contentMetricsLeft && containerMetricsRight < contentMetricsRight) {
            return "both";
        } else if (contentMetricsLeft < containerMetricsLeft) {
            return "left";
        } else if (contentMetricsRight > containerMetricsRight) {
            return "right";
        } else {
            return "none";
        }
    }




});
/*===== Nav Slider =====*/