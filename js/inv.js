// 스크롤시 메인 블러 시작
$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > $(window).height() * 0.2) {
            $("#introTitle").addClass("blur");
        } else {
            $("#introTitle").removeClass("blur");
        }
    });
});
