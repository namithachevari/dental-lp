/* =======================================
GentleDental Theme jQuery Plugin Activate
========================================== */
initMapfn = "";
(function ($) {
	$(document).ready(function () {
		function isRealDevice() {
			return (
				/Android|webOS|iPhone|iPad|macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				) &&
				(typeof window.orientation != "undefined" ||
					navigator.maxTouchPoints > 1)
			);
		}
		function isDevice() {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			);
		}
		function isDesktop() {
			return $(window).width() > 1024;
		}
		function islargerScreen() {
			return $(window).width() > 1440;
		}
		function isTablet() {
			return $(window).width() >= 768 && $(window).width() <= 1024;
		}
		function isMobileIpad() {
			return $(window).width() < 1199;
		}
		function isMobile() {
			return $(window).width() < 768;
		}
		function isMobileIPadIPadpro() {
			return isRealDevice() && $(window).width() <= 1366;
		}
		function isIpadPro() {
			return (
				isDevice() && $(window).width() >= 768 && $(window).width() <= 1366
			);
		}
		function getOrientation() {
			return window.innerWidth > window.innerHeight ? "landscape" : "portrait";
		} /*Jul02*/
		function initMview() {
			$("body").toggleClass(
				"mobileview",
				isDevice() ||
					isMobile() ||
					isMobileIpad() ||
					isTablet() ||
					isIpadPro() ||
					isMobileIPadIPadpro()
			);
		}

		function hashTagSmoothScroll(target) {
			var hashTag = location.hash;
			if (typeof target != "undefined" && target != "") hashTag = target;
			if (hashTag.indexOf("#sst-") >= 0) {
				var target = hashTag.split("-")[1],
					extraOffset =
						$("#STabMenu:visible").length > 0
							? $("#STabMenu:visible").outerHeight()
							: $("#Header").outerHeight(),
					offset = parseInt($("#" + target).offset().top - extraOffset);
				$("html,body").stop().animate({ scrollTop: offset }, 0);
			}
		}
		initMview();

		var clientSlider = "";

		function clientSliderInit() {
			if (clientSlider != "") {
				clientSlider.length > 0 && clientSlider.destroySlider();
			}
			clientSlider = $(".clients-slider").bxSlider({
				auto: false,
				pause: 3000,
				preloadImages: "visible",
				slideWidth: isTablet() ? $(window).width() : 600,
				minSlides: isMobileIpad() ? 1 : 2,
				maxSlides: isMobileIpad() ? 1 : 2,
				responsive: {
					0: {
						controls: false,
					},
					1025: {
						controls: true,
					},
				},
				adaptiveHeight: false,
				// pager: ($(".clients-slider > li").length > 2) ? true : false,
				touchEnabled: isRealDevice(),
			});
		}
		if (
			($(".clients-slider li").length > 2 && isDesktop()) ||
			($(".clients-slider li").length > 1 && (isMobile() || isMobileIpad()))
		) {
			$(".clients-slider").imagesLoaded(function () {
				$(".clients-slider").removeClass("loading").find("#loader").remove();
				clientSliderInit();
			});
		} else {
			$(".clients-slider").addClass("noslider");
			$("#OurClients").addClass("noslider-wrappper");
		}

		var whygdSlider = "";
		function whygdSliderInit() {
			if (whygdSlider != "" && typeof whygdSlider != "undefined") {
				whygdSlider.length > 0 && whygdSlider.destroySlider();
			}
			$(".why-gd-slider").imagesLoaded(function () {
				$(".why-gd-slider").removeClass("loading").find("#loader").remove();
				whygdSlider = $(".why-gd-slider").bxSlider({
					controls: true,
					auto: false,
					preloadImages: "visible",
					pause: 3000,
					responsive: true,
					pager: $(".why-gd-slider > li").length > 2 ? true : false,
					touchEnabled: isRealDevice(),
				});
			});
		}
		/*Jul01*/ $(".why-gd-slider img[data-src]").length <= 0 &&
			whygdSliderInit();
		// Related Stories Slider
		var relatedstoriesSlider = "";
		function relatedstoriesSliderInit() {
			if (relatedstoriesSlider != "") {
				relatedstoriesSlider.length > 0 && relatedstoriesSlider.destroySlider();
			}
			relatedstoriesSlider = $(".related-stories-slider").bxSlider({
				useCSS: true,
				slideWidth: islargerScreen() ? 420 : 280,
				infiniteLoop: true,
				moveSlides: 3,
				nav: false,
				preloadImages: "visible",
				minSlides: isMobile() ? 1 : 3,
				maxSlides: isMobile() ? 1 : 3,
				slideMargin: islargerScreen() ? 40 : 2,
				responsive: true,
				touchEnabled: isRealDevice(),
			});
		}
		relatedstoriesSliderInit();

		// Related Stories Mobile Slider
		var relatedstoriesmobileSlider = "";
		function relatedstoriesmobileSliderInit() {
			if (
				$("#RealatedStories").hasClass("noslider") &&
				relatedstoriesmobileSlider != ""
			) {
				relatedstoriesmobileSlider.length > 0 &&
					relatedstoriesmobileSlider.destroySlider();
			}
			if (isMobile() && $("#RelatedResources").length <= 0) {
				relatedstoriesmobileSlider = $(
					"#RealatedStories .stories-wrap"
				).bxSlider({
					useCSS: true,
					slideWidth: 260,
					infiniteLoop: true,
					moveSlides: 1,
					nav: true,
					preloadImages: "visible",
					minSlides: isMobile() ? 1 : 3,
					maxSlides: isMobile() ? 1 : 3,
					slideMargin: 10,
					responsive: true,
					adaptiveHeight: true,
				});
			}
		}
		relatedstoriesmobileSliderInit();
		if (
			isMobile() &&
			$("#RealatedStories .stories-wrap .each-story").length > 2
		) {
			$("#RealatedStories .stories-wrap").imagesLoaded(function () {
				$("#RealatedStories .stories-wrap")
					.removeClass("loading")
					.find("#loader")
					.remove();
				relatedstoriesmobileSliderInit();
			});
		} else {
			$("#RealatedStories .stories-wrap").addClass("noslider");
			$("#RealatedStories").addClass("noslider-wrappper");
		}

		//Location Meet Our Doctor Sticky Kit
		if (isDesktop() && !isRealDevice()) {
			$("#MeetOurDoctors.section .lhs-wrapper").stick_in_parent({
				offset_top: $("#STabMenu").outerHeight() + 75,
				bottoming: !0,
			});
		}
		//Services Meet Our Oral Surgeons Sticky Kit
		if (isDesktop()) {
			$("#MeetOurDoctors.trusted-dentist .lhs-wrapper").stick_in_parent({
				offset_top: $("#Header").outerHeight() + 75,
				bottoming: !0,
			});
		}
		//gdoffersSliderInit();
		if (isMobileIpad() || isIpadPro()) {
			$(".offers-wrapper .each-offer").click(function () {
				var dis = $(this);
				if (dis.index() != 1) {
					dis.toggleClass("active");
					dis.siblings().removeClass("active");
				}
			});
		}

		var ourservicesSlider = "";
		function ourservicesSliderInit() {
			if (ourservicesSlider != "" && typeof ourservicesSlider != "undefined") {
				ourservicesSlider.length > 0 && ourservicesSlider.destroySlider();
			}
			if (isMobile()) {
				$("#OurServices .posts-wrap").imagesLoaded(function () {
					$("#OurServices .posts-wrap")
						.removeClass("loading")
						.find("#loader")
						.remove();
					ourservicesSlider = $("#OurServices .posts-wrap").bxSlider({
						useCSS: true,
						slideWidth: 280,
						infiniteLoop: true,
						moveSlides: 1,
						nav: true,
						preloadImages: "visible",
						minSlides: 1,
						maxSlides: 1,
						slideMargin: 2,
						responsive: true,
					});
				});
			}
		}
		isMobile()
			? $("#OurServices .posts-wrap").length <= 0 && ourservicesSliderInit()
			: "";

		//Mobile Menu Inline Scroll
		$("body").on("click", ".inline-scroll", function () {
			if ($("body").hasClass("mmactive")) {
				$("#sm_menu_ham").trigger("click");
				hashTagSmoothScroll();
			}
		});
		$(document).on("click", "a[href^='#sst-']", function () {
			hashTagSmoothScroll($(this).attr("href").trim());
		});
		/*Window Scroll*/
		$(window).scroll(function () {
			/*Sub Menu Active*/
			if ($(window).width() > 1024) {
				onScrollActive();
			}
			/*Blue Sticky Menu*/
			$("body").toggleClass(
				"headers-scrolled",
				$(this).scrollTop() > $("#Header").outerHeight()
			);
			//scroll to top
			var scroll = $(window).scrollTop();
			$(".scroll-to-top").toggleClass("active", scroll >= 300);
			if ($("body").hasClass("home-page")) {
				$("body").toggleClass(
					"sticky-cta-active",
					scroll >= $("input[name='p']").offset().top
				);
			}
		});
		function findActiveSection() {
			var winHO = $(window).height(),
				adjustVal = 200;
			winH = winHO - adjustVal;
			var $return = $(".section").filter(function () {
				return $(this).isInViewport();
			});
			return $return;
		}
		var prop_scrol_time = "";
		function onScrollActive() {
			clearTimeout(prop_scrol_time);
			prop_scrol_time = setTimeout(function () {
				var cActive = findActiveSection();
				$(".smooth-scroll")
					.removeClass("active")
					.filter("[data-href='#" + $(cActive[0]).attr("id") + "']")
					.addClass("active");
			}, 200);
		}
		//scroll body to 0px on click
		$(".to-header").click(function () {
			$("body,html").animate(
				{
					scrollTop: 0,
				},
				800
			);
			return false;
		});
		//Mobile Menu
		//Mobile Menu
		$(".mobile_menu").simpleMobileMenu({
			menuStyle: "slide",
		});
		//Dynamic Services LP Scripts
		// $(".sub-learnmore-text a, .sub-learnmore-text .close-icon").click(function(e) {
		//      e.preventDefault();
		//      $(".sub-learnmore-text").toggleClass("active");
		//  });
		var orthodontistSlider = "";
		function orthodontistSliderInit() {
			if (
				orthodontistSlider != "" &&
				typeof orthodontistSlider != "undefined"
			) {
				orthodontistSlider.length > 0 && orthodontistSlider.destroySlider();
			}
			$(".orthodontist-slider").removeClass("noslider"); /*Jul02*/
			$("#Locations").removeClass("noslider-wrappper"); /*Jul02*/

			$(".orthodontist-slider").imagesLoaded(function () {
				$(".orthodontist-slider")
					.removeClass("loading")
					.find("#loader")
					.remove();
				var ls = $(".orthodontist-slider li");
				/*Jul02*/
				if (
					(ls.length > 4 && isDesktop()) ||
					(isMobile() &&
						((getOrientation() == "portrait" && ls.length > 1) ||
							(getOrientation() == "landscape" && ls.length > 2))) ||
					(ls.length > 3 && isMobileIpad())
				) {
					orthodontistSlider = $(".orthodontist-slider").bxSlider({
						useCSS: true,
						slideWidth: islargerScreen() ? 460 : 320,
						infiniteLoop: true,
						moveSlides: 2,
						nav: true,
						preloadImages: "visible",
						minSlides: isMobile() ? 1 : 3,
						maxSlides: isMobile() ? ls.length : 3,
						slideMargin: 0,
						responsive: true,
						touchEnabled: isRealDevice(),
					});
				} else {
					$(".orthodontist-slider").addClass("noslider");
				}
			});
		}
		$(".orthodontist-slider img[data-src]").length <= 0 &&
			orthodontistSliderInit();
		// $(window).bind('resize', function(e){
		//     if (window.RT) clearTimeout(window.RT);
		//     window.RT = setTimeout(function()
		//     {
		//       this.location.reload(false); /* false to get page from cache */
		//     }, 100);
		//   });
		//
		var serviceswhygdmobileSlider = "";
		function serviceswhygdmobileSliderInit() {
			if (
				serviceswhygdmobileSlider != "" &&
				typeof serviceswhygdmobileSlider != "undefined"
			) {
				serviceswhygdmobileSlider.length > 0 &&
					serviceswhygdmobileSlider.destroySlider();
			}
			if (
				isMobile() &&
				$("#LPWhyGentleDental .each-block-wrapper .eachblock").length > 2
			) {
				serviceswhygdmobileSlider = $(
					"#LPWhyGentleDental .each-block-wrapper"
				).bxSlider({
					controls: isMobileIpad() ? true : false,
					useCSS: true,

					// auto: true,
					infiniteLoop: true,
					moveSlides: 1,
					pause: 3000,
					nav: true,
					minSlides: 1,
					maxSlides: 1,
					responsive: {
						0: {
							items: 1,
							margin: 0,
							slideMargin: 10,
						},
					},

					// adaptiveHeight: true,
					touchEnabled: isRealDevice() ? true : false,
				});
			}
		}
		if (
			isMobile() &&
			$("#LPWhyGentleDental .each-block-wrapper .eachblock").length < 2
		) {
			$("#LPWhyGentleDental .each-block-wrapper").addClass("noslider");
			$("#LPWhyGentleDental").addClass("noslider-wrapper");
		}
		serviceswhygdmobileSliderInit();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 40) {
				$("body").addClass("lp-headers-scrolled");
			} else {
				$("body").removeClass("lp-headers-scrolled");
			}
		});
		// if (isMobile()) {
		//   $(".mobile-bottom-cta").stick_in_parent({
		//     parent: $("#parent"),
		//     bottoming: !0
		//   });
		// }
		//Browser resize
		function reInitSliderOnResize() {
			initMview();
			// homeSliderInit();
			clientSliderInit();
			whygdSliderInit();
			relatedstoriesSliderInit();
			meetourdoctorsSliderInit();
			ourservicesSliderInit();
			orthodontistSliderInit();
			serviceswhygdmobileSliderInit();
			relatedstoriesmobileSliderInit();
			locationSliderInit();
			eachTabSectionInit();
			tabInit();
		}
		var prop_resize_time = "",
			wRevent = isRealDevice() ? "orientationchange" : "resize";
		$(window).on(wRevent, function () {
			clearTimeout(prop_resize_time);
			prop_resize_time = setTimeout(reInitSliderOnResize, 200);
		});
		/*All Image Loaded*/
		$("body").imagesLoaded(function () {
			hashTagSmoothScroll();
		});
		$(window).on("hashchange", function () {
			hashTagSmoothScroll();
		});
		/*All Image Loaded*/
		/*Lazy loader*/
		function lazySlider(dis, sel, cb) {
			var par = $(dis).parents(sel),
				imgT = par.data("total") || 0,
				imgC = par.data("inc") || 0,
				slI = par.data("initd") || false;
			if (par.length > 0) {
				if (imgT <= 0) {
					par.addClass("lloads");
					par.data("total", par.find("img").length);
					par.data("inc", 0);
				}
				par.data("inc", imgC + 1);
				if (imgT == imgC + 1 && !slI && imgT > 0 && imgC > 0) {
					par.data("initd", true);
					par.removeClass("lloads");
					var tM = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent)
						? 2000
						: 100;
					typeof cb == "function" && setTimeout(cb, tM);
				}
			}
		}
		/*Jul01*/
		$.extend($.lazyLoadXT, {
			onshow: function () {
				lazySlider(this, ".why-gd-slider", whygdSliderInit);
				lazySlider(this, ".location-slider", locationSliderInit);
				lazySlider(this, ".event-photos-slider", locationSliderInit);
				lazySlider(this, ".orthodontist-slider", orthodontistSliderInit);
				lazySlider(
					this,
					"#OurServices .posts-wrap",
					isMobile() ? ourservicesSliderInit : ""
				);
			},
		});
		//     window.onload = function() {

		//   var placeholder = document.querySelector('.placeholder'),
		//       small = placeholder.querySelector('.img-small')

		//   // 1: load small image and show it
		//   var img = new Image();
		//   img.src = small.src;
		//   img.onload = function () {
		//    small.classList.add('loaded');
		//   };

		//   // 2: load large image
		//   var imgLarge = new Image();
		//   imgLarge.src = placeholder.dataset.large;
		//   imgLarge.onload = function () {
		//     imgLarge.classList.add('loaded');
		//   };
		//   placeholder.appendChild(imgLarge);
		// }
		// lazyLoadXT loader
		$(window).lazyLoadXT();
		/*Doctor - Map - Appointment*/
		$(".page-node-type-doctors").on(
			"click",
			".gm-style-iw-d .link-wrap .link a",
			function (e) {
				e.preventDefault();
				hashTagSmoothScroll("#sst-FormWrapper");
				$("[name='first_name']").focus();
			}
		);
	});
})(jQuery);
