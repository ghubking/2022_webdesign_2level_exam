// 서브메뉴, 갤러리 숨기기
$('.sub').hide()
$('.c2').hide()

// 메인 메뉴를 마우스로 올리면(mouse over) 서브 메뉴 영역이 부드럽게 
// 나타나면서, 서브 메뉴가 보이도록 한다
$('nav').on('mouseover',function(){
    $('.sub').stop().slideDown();
})
// 메인 메뉴에서 마우스커서가 벗어나면(mouse out) 서브 메뉴 영역은 
// 부드럽게 사라져야 한다.
$('nav').on('mouseout',function(){
    $('.sub').stop().slideUp();
})

// 공지사항의 첫 번째 콘텐츠를 클릭(Click)할 경우 
// 레이어 팝업창(Layer Pop_ up)이 나타나며,

$('.c1 a:nth-child(1)').on('click', function(){
    $('.popup').show();
})

//  레이어 팝업창 내에 닫기 버튼을 두어서 클릭하면 해당 팝업창이 닫혀야 한다. 
$('.popup a').on('click', function(){
    $('.popup').hide();
})

// 공지사항과 갤러리 각 탭을 클릭(Click) 시 해당 탭에 대한 내용이 보여야 한다.
// 기존의 active를 모두 지우고 누른것만 active를 add 해라.
$('.c12 .title a:nth-child(1)').on('click',function(){
    $('.c12 .title a').removeClass()
    $(this).addClass('active')
    $('.c1').show();
    $('.c2').hide()
})
$('.c12 .title a:nth-child(2)').on('click',function(){
    $('.c12 .title a').removeClass()
    $(this).addClass('active')
    $('.c1').hide();
    $('.c2').show()
})

// 슬라이드 애니메이션 작업
// 이미지만 바뀌면 안 되고, 이미지가 위에서 아래 또는 아래에서 위로 이동하면서 전환되어야 한다. 
// ❍ 슬라이드는 매 3초 이내로 하나의 이미지에서 다른 이미지로 전환되어야 한다. 
// ❍ 웹사이트를 열었을 때 자동으로 시작되어 반복적으로
// (마지막 이미지가 슬라이드 되면 다시 첫 번째 이미지가 슬라이드 되는 방식) 슬라이드 되어야한다

let count = 0   // 0, 300, 600 을 반복되게
setInterval(function(){
    // console.log(count++)
    count++
    if(count>2){count=0}
    let total = count * 300
    console.log(total)
    $('.slide_contents').css('transform',`translateY(-${total}px)`)
},3000)

