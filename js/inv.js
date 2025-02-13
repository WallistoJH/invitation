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
            $('body').addClass("scroll-on");
        } else {
            $("#introTitle").removeClass("blur");
            $('body').removeClass("scroll-on");
        }
    });
});





// 마음 전하실 곳
// 계좌 번호
$(document).ready(function () {
    // 계좌 복사 기능을 통합하여 최적화
    $(document).on("click", "[data-copy]", function () {
        var account = $("#" + $(this).data("copy")).text().trim();
        var text = $(this).data("text");
        if (account) {
            navigator.clipboard.writeText(account)
                .then(function () {
                    alert( text + "가 복사되었습니다.");
                }.bind(this))
                .catch(function (err) {
                    console.error("복사 실패: ", err);
                });
        }
    });
});
