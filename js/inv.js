

// 전역 변수로 오디오 객체 선언
var bgMusic = null;

// 배경음악 재생 함수
function playAudio() {
    if (!bgMusic) {
        bgMusic = new Audio('mp3/Two_Words.mp3');
        bgMusic.loop = true;
    }
    bgMusic.play().then(function() {
        console.log("Audio is playing");
    }).catch(function(error) {
        console.error("Audio playback failed:", error);
    });
}

// 배경음악 정지 함수
function stopAudio() {
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
}
// 오디오 온/오프 토글 함수
function toggleAudio() {
    var btn = document.getElementById('audioToggle');

    // bgMusic가 생성되어 있고 재생 중이라면 정지, 아니면 재생
    if (bgMusic && !bgMusic.paused) {
        stopAudio();
        btn.textContent = "배경음악 재생";
    } else {
        playAudio();
        btn.textContent = "음악끄기";
    }
}




// 스크롤시 메인 블러 시작
$(document).ready(function () {
    // 브라우저가 스크롤 위치를 기억하지 않도록 설정
    // if ("scrollRestoration" in history) {
    //     history.scrollRestoration = "manual";
    // }
    // 페이지 로드 시 맨 위로 이동
    // $(window).scrollTop(0);

    // 스크롤 이벤트

    // 전역 변수로 오디오 재생 여부 플래그 설정 (최초는 false)
    let audioPlayed = false;

    $(window).on("scroll", function () {
        // if ($(window).scrollTop() > $(window).height() * 0.3) {
        if ($(window).scrollTop() > 50) {
            $("#introTitle").addClass("blur");
            $('#scrollIndicate').addClass('on');
            $('body').addClass("scroll-on");

            if (!audioPlayed) {
                playAudio();
                audioPlayed = true;  // 한 번 실행한 후 true로 변경
            }

        } else {
            $("#introTitle").removeClass("blur");
            $('body').removeClass("scroll-on");
            $('#scrollIndicate').removeClass('on');
        }
    });


});


// 각각 섹션들의 위치 조정
$(document).ready(function(){
    $(window).on('scroll', function(){
        var windowHeight = $(window).height();
        var triggerPoint = windowHeight * 0.65; // 뷰포트 높이의 75% 위치

        $('.inv-section').each(function(){
            // 요소의 상단이 브라우저의 스크롤 위치에 따라 얼마만큼 떨어져 있는지 계산
            var elementTop = $(this).offset().top - $(window).scrollTop();

            if (elementTop < triggerPoint) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });
    });
});




$(document).ready(function(){
    $('#scrollIndicate').on('click', function(e) {
        e.preventDefault(); // 기본 동작 방지
        var currentScroll = $(window).scrollTop();
        var windowHeight = $(window).height() * 1;
        $('html, body').animate({
            scrollTop: currentScroll + windowHeight
        }, 300); // 300ms 애니메이션
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




// 달력 추가
$(document).ready(function(){
$("#calendarInclude").load("include/calendar.html", function() {});
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
