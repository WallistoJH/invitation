// 스크롤시 메인 블러 시작
$(document).ready(function () {
    // 브라우저가 스크롤 위치를 기억하지 않도록 설정
    // if ("scrollRestoration" in history) {
    //     history.scrollRestoration = "manual";
    // }
    // 페이지 로드 시 맨 위로 이동
    // $(window).scrollTop(0);

    // 스크롤 이벤트
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > $(window).height() * 0.4) {
            $("#introTitle").addClass("blur");
        } else {
            $("#introTitle").removeClass("blur");
        }
    });
});
