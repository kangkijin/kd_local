/* 클라이언트 ui 스크립트 */
/*var sessionUserId = '';

if(sesseionUserId == ""){
   //로그인 안했을때
	console.log("로그인x");
} else {
   //로그인 했을때
	console.log("로그인o");
}*/

// 헤더 메뉴 반응형
function responsiveStyle() {
  //gnb 메뉴용
  var windowWidth = $(window).outerWidth();

  // 더보기 버튼 추가
  $(".gnb_2depth > li").each(function () {
    var target = $(this);
    target.children("a").children(".gnb_more").hide();
    if (target.find(".gnb_3depth").length) {
      $('<span class="gnb_more">펼쳐보기</span>').appendTo(
        target.children("a")
      );
    }
  });

  if (windowWidth < 1025) {
    //console.log('모바일,태블릿');

    // 기본 설정
    $(window).off("scroll");
    $("body").removeClass("scrolly on");
    $("body").off("scrolly");
    $(".gnb_1depth").off();
    $(".gnb_1depth").removeClass("on");
    $(".gnb_2depth li").off();
    $(".gnb_2depth").removeAttr("style");
    $(".gnb_3depth").removeAttr("style");
    $(".function_left").insertBefore($(".btn_menu"));
    $(".btn_admin").prependTo($(".gnb_wrap"));
    $(".btn_menu").removeClass("on");
    $(".gnb_2depth").removeClass("on");
    $(".sitemap").removeClass("on");
    $(".sitemap > .inner").hide();
    $(".gnb_wrap").insertAfter($(".header_wrap > .grid_content"));

    // gnb
    $(".btn_menu, .mobile_gnb_header").on("click", function (e) {
      e.stopImmediatePropagation();
      $(".gnb_1depth").removeClass("on");
      if ($("body").hasClass("on")) {
        $("body").removeClass("on");
      } else {
        $("body").addClass("on");
      }
    });
  } else {
    //console.log("PC");

    // 기본 설정
    $("body").removeClass("scrolly on");
    //$(".btn_admin").insertBefore($(".user_info"));
    $(".gnb_1depth").removeClass("on");
    $(".gnb_2depth").removeAttr("style");
    $(".gnb_3depth").removeAttr("style");
    $(".btn_log").prependTo($(".function_left"));
    $(".btn_admin").insertBefore($(".btn_sitemapmenu"));
    $(".sitemap").removeClass("on");
    $(".sitemap > .inner").hide();
    $(".gnb_wrap").appendTo($(".header_wrap > .grid_content"));

    //2depth 메뉴
    $(".gnb_1depth").on({
      "mouseenter focusin": function () {
        $(this).addClass("on");
        $(".prof_header_wrap .gnb_1depth").removeClass("on");
        $(this).find(".gnb_2depth").stop().slideDown("fast");
      },
      "mouseleave focusout": function () {
        $(this).removeClass("on");
        $(this).find(".gnb_2depth").stop().slideUp("fast");
      },
    });

    // header 스크롤시
    $(window).on("scroll", function () {
      var scr = $(this).scrollTop();
      if (scr > 0) {
        $("body").addClass("scrolly");
        //$('.btn_sitemapmenu').appendTo('.gnb_wrap');
      } else {
        $("body").removeClass("scrolly");
        //$('.btn_sitemapmenu').appendTo('.header_top');
      }
      return false;
    });

    if ($(this).scrollTop() > 0) {
      $("body").addClass("scrolly");
    } else {
      $("body").removeClass("scrolly");
    }
  }

  if (windowWidth < 1280) {
    $(".mycerti_area").insertAfter(".myinfo_area");
  } else {
    $(".mycerti_area").insertAfter(".mytest_area");
  }

  if (windowWidth < 480) {
    $(".mainprogram_wrapper .main_more").insertAfter(".check_col_wrapper");
  } else {
    $(".mainprogram_wrapper .main_more").appendTo(
      ".mainprogram_wrapper .check_col_wrap"
    );
  }
}

var resizeTimer;
$(window).on("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(resizeEnd, 1000);
});

function resizeEnd() {
  responsiveStyle();
}

//sitemap
function siteMap() {
  $(".btn_sitemapmenu").on("click", function (e) {
    e.stopImmediatePropagation();
    $("body").addClass("on");
    $(".sitemap").addClass("on");
    $(".sitemap > .inner").fadeIn();
  });

  $(".btn_sitemap").on("click", function (e) {
    e.stopImmediatePropagation();
    $("body").removeClass("on");
    $(".sitemap").removeClass("on");
    $(".sitemap > .inner").fadeOut();
  });
}

// lnb 메뉴
function lnbMenu() {
  $(".lnb_list > ul")
    .children("li")
    .each(function () {
      var target = $(this);
      target.children("a").children("span").hide();
      if (target.find(".lnb_2depth").length) {
        $("<span>펼쳐보기</span>").appendTo(target.children("a"));
      }
    });

  $(".lnb_2depth").css("display", "none");

  $(".lnb_list > ul")
    .children("li")
    .on({
      "mouseenter focus": function () {
        $(this).addClass("on");
        $(this).find(".lnb_2depth").stop().slideDown(200);
      },
      "mouseleave blur": function () {
        $(this).removeClass("on");
        $(this).find(".lnb_2depth").stop().slideUp(200);
      },
    });
}

// toggle class 'on'
function toggleOn() {
  $(".on_js").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("on");
  });
}

//페이지 상단 이동
function moveTop() {
  var windowWidth = $(window).outerWidth();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".move_top").addClass("on");
    } else {
      $(".move_top").removeClass("on");
    }
  });
  $(".move_top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  if ($(this).scrollTop() > 100) {
    $(".move_top").addClass("on");
  } else {
    $(".move_top").removeClass("on");
  }
}

// tab : '.tab_js' 안에 '.tab_list_js' 와 '.tab_cnt_js'로 구분지어 사용.
function tab() {
  $(".tab_js").each(function () {
    var tabs = $(this).children(".tab_list_js").children("li");
    var panels = $(this).children(".tab_cnt_js").children("div");
    var lastTab = tabs.filter(".on");
    var lastPanel = $(lastTab.children("a").attr("href"));
    panels.hide();
    lastPanel.show();
    tabs.on("click", function (e) {
      e.preventDefault();
      var thisTab = $(this);
      var thisPanel = $(thisTab.children("a").attr("href"));
      lastTab.removeClass("on");
      thisTab.addClass("on");
      lastPanel.hide();
      thisPanel.show();
      lastTab = thisTab;
      lastPanel = thisPanel;
    });
  });
}

// tab 모양만
function tabSwitch() {
  $(".tab_switch_js").each(function () {
    var tab = $(this).children("li");

    tab.on("click", function (e) {
      e.preventDefault();
      tab.removeClass("on");
      $(this).addClass("on");
    });
  });
}

// 클릭한 영역으로 이동
function gotoin() {
  $(".goto_js").each(function () {
    var gotoTit = $(this).find("a");

    gotoTit.on("click", function (e) {
      e.preventDefault();
      gotoTit.removeClass("on");

      var target = $(this).attr("href");

      if (target.length) {
        $(this).addClass("on");
        $("html,body").animate(
          {
            scrollTop: $(target).offset().top - 220,
          },
          "slow"
        );
      }
    });
  });
}

// accordion : '.accordion_js' 안에 '.acd_list_js' 와 '.acd_cnt_js'로 구분지어 사용.
function accordion() {
  $(".accordion_js").each(function () {
    var tabs = $(this).find(".acd_list_js");

    $(this).find(".acd_cnt_js").hide();

    // '.on'이 붙은 아이는 페이지 진입시 열어놓기
    tabs.filter(".on").next(".acd_cnt_js").show();

    tabs.on("click", function (e) {
      e.preventDefault();

      var thisTab = $(this);
      var thisPanel = thisTab.next(".acd_cnt_js");
      var notThisTab = tabs.not(thisTab);
      var notThisPanel = notThisTab.next();

      if (notThisTab) {
        notThisTab.removeClass("on");
        notThisPanel.slideUp(300);
      }

      thisTab.toggleClass("on");
      thisPanel.stop().slideToggle(300);
    });
  });
}

// accordion : 테이블 연동 1
function accorTable() {
  $(".accortable_js").each(function () {
    var btn = $(this).find(".btn_accordion");

    btn.on("click", function (e) {
      e.preventDefault();

      if ($(".tbl").is(":hidden")) {
        $(this).addClass("on");
        $(this).find("span").removeClass("on");
        $(this).find(".close").addClass("on");
        $(this).parents(".accortable_js").find(".tbl").slideDown();
      } else {
        $(this).removeClass("on");
        $(this).find("span").removeClass("on");
        $(this).find(".open").addClass("on");
        $(this).parents(".accortable_js").find(".tbl").slideUp();
      }
    });
  });
}

// accordion : 테이블 연동 2
function accorTable2() {
  $(".accortable2_js").each(function () {
    var btn = $(this).find(".btn_accordion");

    btn.on("click", function (e) {
      e.preventDefault();

      if ($(this).parents("tr").next(".detail").is(":hidden")) {
        $(this).addClass("on");
        $(this).find("span").removeClass("on");
        $(this).find(".close").addClass("on");
        $(this).parents("tr").next(".detail").show();
      } else {
        $(this).removeClass("on");
        $(this).find("span").removeClass("on");
        $(this).find(".open").addClass("on");
        $(this).parents("tr").next(".detail").hide();
      }
    });
  });
}

//  검색영역 - 상세검색 Toggle
function searchDetail() {
  var clickDetail = $(".search_box .btn_searchdetail");
  clickDetail.on("click", function () {
    $(this).toggleClass("on");
    $(this).parents(".search_box").find(".search_detail").slideToggle();
  });
}

// selectbox
function selectBox() {
  $(".select_form").each(function () {
    var label = $(this).children("label");
    var target = $(this).children(".select_custom");
    var targetName = target.children("option:selected").text();

    label.text(targetName);
    target.on("change", function () {
      var targetName = $(this).children("option:selected").text();
      label.text(targetName);
    });
  });
}

//swiper 메인 슬라이드
function mainSlide() {
  var swiper = new Swiper(".main_slidewrap .swiper-container", {
    slidesPerView: 1,
    effect: "fade",
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		loop: true,
		pagination: {
			el: ".mainslide_navigation .swiper-pagination",
			type: "fraction"
		},
    navigation: {
      nextEl: ".mainslide_navigation .swiper_next",
      prevEl: ".mainslide_navigation .swiper_prev",
    },
		on: {
			init: function () {
				$(".swiper-progress-bar").removeClass("animate");
				$(".swiper-progress-bar").eq(0).addClass("animate");
			},
			slideChangeTransitionStart: function () {
				$(".swiper-progress-bar").removeClass("animate");
			},
			slideChangeTransitionEnd: function () {
				$(".swiper-progress-bar").eq(0).addClass("animate");
			}
		}
  });
}

//swiper 연구성과 슬라이드
function performSlide() {
	var swiper = new Swiper('.performance_slider .swiper-container', {
		slidesPerView: 2.77,
		spaceBetween: 24,
		navigation: {
			nextEl: '.perform_navigation .swiper_next',
			prevEl: '.perform_navigation .swiper_prev',
		},
		breakpoints: {
			1280: {
				slidesPerView: 2,
				spaceBetween: 16
			},
			1024: {
				slidesPerView: 2.4,
				spaceBetween: 16
			},
			768: {
				slidesPerView: 2.1,
				spaceBetween: 12
			},
			480: {
				slidesPerView: 1.5,
				spaceBetween: 12
			},
			360: {
				slidesPerView: 1.1,
				spaceBetween: 12
			},
		}
	});
}

// 갤러리 팝업 슬라이드
function gallerySlide() {
  var galleryThumbs = new Swiper(".gallery_thumb_swiper .swiper-container", {
    spaceBetween: 24,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      1024: {
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 3.7,
        spaceBetween: 14,
      },
      480: {
        slidesPerView: 3.7,
        spaceBetween: 10,
      },
    },
  });
  var galleryTop = new Swiper(".gallery_main_swiper .swiper-container", {
    navigation: {
      prevEl: ".gallery_main_swiper .btn_prev",
      nextEl: ".gallery_main_swiper .btn_next",
    },
    thumbs: {
      swiper: galleryThumbs,
    },
  });
}

// 체크박스 토글(row) : 검색창 셀렉트박스
function checkToggleRow() {
  // 클릭시 셀렉트 박스 보여졌다 사라지는 동작
  $(".show_checktxt").on("click", function () {
    $(".check_row_wrap").slideToggle(300);
  });

  var checkBox = $(".show_checktxt");
  var check = $("input:checkbox[name=check_row]");
  var checkAll = $("input:checkbox[name=checkall_row]");
  var checkAllSelected = $("input:checkbox[name=checkall_row]:checked");
  var checkTotalCnt = $("input:checkbox[name=check_row]").length;
  var checkTxt = $(".check_row_wrap")
    .children(".check_row")
    .children("input:checked")
    .next()
    .text();

  checkBox.text(checkTxt);

  // '전체'외 나머지 선택시
  check.on("change", function () {
    var checkSelected = $("input:checkbox[name=check_row]:checked");
    var checkAllSelected = $("input:checkbox[name=checkall_row]:checked");
    var showCheck = checkSelected.next().html();

    checkBox.text(showCheck);

    if (checkSelected.length == checkTotalCnt) {
      check.prop("checked", false);
      checkAll.prop("checked", true);
      checkBox.text("전체");
    } else if (checkSelected.length >= 2) {
      checkAllSelected.prop("checked", false);
      checkBox.text("다중선택");
    } else if (checkSelected.length >= 1) {
      checkAllSelected.prop("checked", false);
      checkBox.text(showCheck);
    } else {
      checkAll.prop("checked", true);
      checkBox.text("전체");
    }
  });

  // '전체' 선택시
  checkAll.on("change", function () {
    checkAll.prop("checked", true);
    checkBox.text("전체");
    check.prop("checked", false);
  });
}

//체크박스 토글(col) : 체크박스 버튼
function checkToggleCol() {
  $(".check_col_wrapper").each(function () {
    var checkAll = $(this).find('input[name="checkall_col"]');
    var check = $(this).find('input[name="check_col"]');
    var checkTotalCnt = check.length;

    checkAll.on("change", function () {
      check.prop("checked", false);
      $(this).prop("checked", true);
    });

    check.on("change", function () {
      var checkSelected = check.filter(":checked");

      checkAll.prop("checked", false);
      //$(this).prop('checked',true);

      if (checkSelected.length >= checkTotalCnt) {
        checkAll.prop("checked", true);
        check.prop("checked", false);
      }

      if (checkSelected.length == 0) {
        checkAll.prop("checked", true);
      }
    });
  });
}

//라디오 토글
function radioToggle() {
  $(".radio_toggle>input[type='radio']").click(function () {
    var previousRadio = $(this).data("storedRadio");
    if (previousRadio) {
      $(this).prop("checked", !previousRadio);
      $(this).data("storedRadio", !previousRadio);
    } else {
      $(this).data("storedRadio", true);
      $(".radio_toggle>input[type=radio]:not(:checked)").data(
        "storedRadio",
        false
      );
    }
    if ($(this).is(":checked")) {
      $(".radio_toggle").removeClass("on");
      $(this).parent().addClass("on");
    } else {
      $(this).parent().removeClass("on");
    }
  });
}

// checkbox button - 찜목록 버튼
function checkBtn() {
  $(".check_btn_wrap").each(function () {
    $(this)
      .find('input[type="checkbox"]')
      .change(function () {
        $(this).next().toggleClass("on");
      });
  });
}

// 클릭시 on/off 버튼 : 찜하기 버튼
function toggleBtn() {
  $(".btn_toggle").each(function () {
    $(this).on("click", function () {
      $(this).toggleClass("on");
    });
  });
}
// 글자수 표기
function letterCount() {
  $("#letter_count").keyup(function () {
    var content = $(this).val();
    $("#letter_counter").html(content.length + "/100");
  });
  $("#letter_count").keyup();
}

// 페이징버튼 클릭시 페이지 상단부분으로 이동
function up() {
  $(".up_js").each(function () {
    var windowWidth = $(window).outerWidth();

    if (windowWidth < 1025) {
      $(".testlist_move").click(function (e) {
        e.preventDefault();
        $("body,html").animate({ scrollTop: 150 }, 300);
      });
    } else {
      $(".testlist_move").click(function (e) {
        e.preventDefault();
        $("body,html").animate({ scrollTop: 200 }, 300);
      });
    }
  });
}

//FAQ
function faqList() {
  $(".faq_tit").on("click", function () {
    $(this)
      .parents()
      .children(".faq_box")
      .not($(this).parent())
      .find(".faq_tit")
      .removeClass("on");
    $(this)
      .parents()
      .children(".faq_box")
      .not($(this).parent())
      .find(".faq_cnt")
      .slideUp();
  });
}

// IE 버전 체크 (UserAgent)
var ua = navigator.userAgent.toLowerCase();
// IE7엔 브라우저 엔진명인 Trident가 없고 IE11엔 MSIE란 문자열이 없으므로 두 가지 경우를 모두 체크.
if (ua.indexOf("msie") != -1 || ua.indexOf("trident") != -1) {
  var version = 11;
  ua = /msie ([0-9]{1,}[\.0-9]{0,})/.exec(ua);
  if (ua) {
    version = parseInt(ua[1]);
  }
  var classNames = "";
  // 기존 방식에 is-ie 라는 클래스 추가
  classNames += " is-ie";
  // 기존 방식에 현재 버전 클래스 추가
  classNames += " ie" + version;
  for (var i = version + 1; i <= 11; i++) {
    classNames += " lt-ie" + i;
  }
  // html 태그에 클래스 추가
  document.getElementsByTagName("html")[0].className += classNames;
}

$(document).ready(function () {
  // toggle class 'on' : sitemap
  toggleOn();

  // 페이징버튼 클릭시 페이지 상단부분으로 이동
  up();

  //gnb 메뉴 반응형 동작
  responsiveStyle();

  //페이지 상단으로 이동
  moveTop();

  //sitemap
  siteMap();

  //lnb 메뉴
  lnbMenu();

  //tab
  /*tabList();*/

  // tab 기본
  tab();

  // tab 모양만
  tabSwitch();

  // 클릭한 영역으로 이동
  gotoin();

  // accordion
  accordion();
  // accordion : 테이블 연동 1
  accorTable();
  // accordion : 테이블 연동 2
  accorTable2();

  //  검색영역 - 상세검색 Toggle
  searchDetail();

  //토글 체크박스 검색버튼
  /*checkToggle();*/

  // selectbox
  selectBox();

  // 체크박스 토글(row) : 검색창 셀렉트박스
  checkToggleRow();

  //체크박스 토글(col) : 체크박스 버튼
  checkToggleCol();

  //라디오 토글
  radioToggle();

  // checkbox button - 찜목록
  checkBtn();

  // 클릭시 on/off 버튼 : 찜하기 버튼
  toggleBtn();

  // 글자수 표기
  letterCount();

  //FAQ
  faqList();

  //swiper 메인 슬라이드
  // mainSlide();

	//swiper 연구성과 슬라이드
	// performSlide();

  // 갤러리 팝업 슬라이드
  gallerySlide();

  // select2 설정
  // $(".sel_search_row select").select2({
  // 	formatNoMatches: function() {
  // 		return '결과가 없습니다.';
  // 	}
  // });

  // 이미지 라이트박스
  // $('.openimg').magnificPopup({
  // 	type: 'image',
  // 	closeOnContentClick: false,
  // 	closeBtnInside: false,
  // 	callbacks: {
  // 		resize: changeImgSize,
  // 		imageLoadComplete: changeImgSize,
  // 		change: changeImgSize
  // 	}
  // });

  function changeImgSize() {
    var img = this.content.find("img");
    img.css("max-height", "100%");
    img.css("height", "auto");
    img.css("width", "auto");
    img.css("max-width", "810px");
  }
});

// outline 설정 - 키보드로 접근시엔 아웃라인을 보여주고 마우스로 접근할때는 아웃라인을 없애줌
(function (d) {
  var style_element = d.createElement("STYLE"),
    dom_events = "addEventListener" in d,
    add_event_listener = function (type, callback) {
      // Basic cross-browser event handling
      if (dom_events) {
        d.addEventListener(type, callback);
      } else {
        d.attachEvent("on" + type, callback);
      }
    },
    set_css = function (css_text) {
      // Handle setting of <style> element contents in IE8
      !!style_element.styleSheet
        ? (style_element.styleSheet.cssText = css_text)
        : (style_element.innerHTML = css_text);
    };

  d.getElementsByTagName("HEAD")[0].appendChild(style_element);

  // Using mousedown instead of mouseover, so that previously focused elements don't lose focus ring on mouse move
  /*add_event_listener('mousedown', function () {
		set_css(':focus{outline:0}::-moz-focus-inner{border:0;}');
	});*/
  add_event_listener("keydown", function () {
    set_css(
      ":focus{outline:dotted 1px #193296}::-moz-focus-inner{border:dotted 1px #193296;}"
    );
  });
})(document);
