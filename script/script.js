// 서브메뉴 초기 숨기기
// javascript
// const sub = document.querySelectorAll('.sub')
// for(let i of sub){i.style.display='none'}
//제이쿼리는 getElement... querySelector등의 별도 선언없이 $사인으로
//명령 시작 시 body의 대상을 모두 인식하여 변수에 저장해준다.
//sub[0].style.display='none'   -->자바스크립트버젼
//sub.css('display','none')    --> 제이쿼리 버젼
//jquery는 display:none or block 등 자주 사용하는 명령어를 하나의 메서드
// 명령어로 단축해서 사용하기도 한다.
//display:none == hide()
//display:block == show()
const sub = $('.sub')
const nav = $('nav > ul > li')
console.log(sub, nav)
sub.hide()
//메뉴에 마우스 올렸을 때 서브 출력
nav.on('mouseover',function(){
    //sub.show()
    //sub.stop().slideDown()
    $(this).find('.sub').stop().slideDown()
})
nav.on('mouseout',function(){
    //sub.hide()
    //sub.stop().slideUp()
    sub.stop().slideUp()
})
/*
DOM.addEventlistener('mouseover',function(){
    for(let i of sub){i.style.display='block'}   --> 자바스크립트 버젼
})
*/
// $('DOM').style.display='none' X
// $('DOM').css('display','none') O