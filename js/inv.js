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
        if ($(window).scrollTop() > $(window).height() * 0.3) {
            $("#introTitle").addClass("blur");
            $('body').addClass("scroll-on");
        } else {
            $("#introTitle").removeClass("blur");
            $('body').removeClass("scroll-on");
        }
    });
});



$(document).ready(function(){
    $('#scrollIndicate').on('click', function(e) {
        e.preventDefault(); // 링크나 다른 기본 동작 방지
        $('html, body').animate({
            scrollTop: $(window).height()
        }, 500); // 500ms 동안 애니메이션 효과 적용 (원하는 속도에 맞게 조절)
    });
});



// 마음 전하실 곳
// 아코디온 버튼
$(document).ready(function(){
    $('.accordion-button').click(function(){
        $(this).toggleClass('on');
        // 클릭한 버튼의 바로 다음 요소(내용 영역)를 토글
        $(this).next('.accordion-content').slideToggle();

        // 만약 동시에 하나의 아코디언만 열리게 하고 싶다면, 아래 주석 해제
        // $('.accordion-content').not($(this).next()).slideUp();
    });
});
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





$(document).ready(function () {


// 목표 시간: 2025년 3월 22일 오후 12시 10분, 한국 표준시(KST, UTC+9)
const targetDate = new Date('2025-03-22T12:10:00+09:00');

function updateCountdown() {
    const now = new Date();
    // 남은 시간(밀리초 단위) 계산
    const diff = targetDate - now;

    // 목표 시간이 지났다면 카운트다운 종료
    if (diff >= 0) {
        document.getElementById('countdown').innerHTML = "감사합니다. 잘 살겠습니다.";
        clearInterval(timer);
        return;
    }
    // 밀리초를 일, 시, 분, 초로 변환
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    // 결과 출력 (예: 10일 5시간 23분 17초)
    document.getElementById('countdown').innerHTML =
        days + ":" + hours + ":" + minutes + ":" + seconds;
}
// 1초마다 updateCountdown 함수를 실행
const timer = setInterval(updateCountdown, 1000);
updateCountdown(); // 페이지 로드 시 바로 실행



});










// 이미지 모달 마우스

// 마우스 커서 트리거 영역
$(document).ready(function(){
    // 문서에 커스텀 화살표 요소 생성하여 추가 (최초에는 숨김)
    var $customArrow = $('<span class="custom-arrow"></span>');
    $('body').append($customArrow);
    $customArrow.hide();

    // 모달 이전/다음 버튼에 마우스 이벤트 핸들러 등록
    $('.modal-prev, .modal-next').on('mouseenter', function(e) {
        // 버튼 종류에 따라 화살표 내용 설정
        if($(this).hasClass('modal-prev')){
            // $customArrow.text('←');  // 왼쪽 화살표
            $customArrow.addClass('left').removeClass('right');
        } else if($(this).hasClass('modal-next')){
            // $customArrow.text('→');  // 오른쪽 화살표
            $customArrow.addClass('right').removeClass('left');
        }
        $customArrow.show();
    }).on('mousemove', function(e) {
        // 마우스 포인터 주변에 커스텀 화살표 위치 업데이트 (오프셋 조절 가능)
        $customArrow.css({
            left: e.pageX + 10,  // 마우스 오른쪽 약간 떨어짐
            top: e.pageY + 10,   // 마우스 아래쪽 약간 떨어짐
        });
    }).on('mouseleave', function() {
        $customArrow.hide();
    });
});
