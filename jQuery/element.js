엘리먼트 제어
- jQuery는 엘리먼트를 제어하는 일관되고 풍부한 기능을 제공한다. 




[자식으로 삽입] 
.append() .appendTo() .html() .prepend() .prependTo() .text()  

$("p").append("<strong>Hello</Strong>"); // 해당 태그의 마지막 자식으로 삽입 됨
$('<li>New Item</li>').appendTo('ul'); //자식을 어디에 추가할지를 먼저 명시한 후 추가할 내용을 정의

$('ul').prepend('<li>New Item</li>');  // <ul> 요소의 시작 부분에 <li> 요소를 추가
$('<li>New Item</li>').prependTo('ul');  // <li> 요소를 <ul> 요소의 시작 부분에 추가

var content = $('div').html(); // <div> 요소의 HTML 내용을 가져오기
$('div').html('<p>New Content</p>'); // <div> 요소의 HTML 내용 설정

var textContent = $('p').text(); // <p> 요소의 텍스트 내용 가져오기
$('p').text('New Text Content'); // <p> 요소의 텍스트 내용 설정


[형제로 삽입]
.after() .before() .insertAfter() .insertBefore()

$('p').after('<span>New Content</span>'); // <p> 요소 뒤에 <span> 요소 추가
$('p').before('<span>New Content</span>');  //<p> 요소 앞에 <span> 요소 추가

$('<p>New Content</p>').insertAfter('div');  // <p> 요소를 <div> 요소 뒤에 추가
$('<p>New Content</p>').insertBefore('div');  // <p> 요소를 <div> 요소 앞에 추가


[부모로 감싸기]
.unwrap() .wrap() .wrapAll() .wrapInner()

$('p').unwrap(); // 예제: <p> 요소의 부모를 제거

$('p').wrap('<div class="wrapper"></div>');  // <p> 요소를 <div>로 감싸기
$('p').wrapAll('<div class="wrapper"></div>'); // <p> 요소들을 각각 <div>로 감싸기

$('p').wrapInner('<span class="highlight"></span>'); // <p> 요소의 내부 텍스트를 <span>으로 감싸기


[삭제]
.detach() .empty() .remove() .unwrap()

var detachedElement = $('div').detach();  $('body').append(detachedElement)// <div> 요소를 제거하고 나중에 다시 추가할 수 있음

$('div').empty(); // 해당 요소의 자식 요소들과 텍스트 등 내용을 제거하지만 해당 요소는 그대로 남아 있음. 태그 자체는 유지되며, 비워진 상태가 됨.

$('div').remove(); ;// <div> 요소를 완전히 제거 


[치환]
.replaceAll() .replaceWith()

// 예제: <p> 요소를 <div>로 교체
$('p').replaceWith('<div>New Content</div>');

// 예제: <div> 요소로 <p>를 교체
$('<div>New Content</div>').replaceAll('p');


[클래스] - css class
.addClass() .hasClass() .removeClass() .toggleClass()

$('div').addClass('highlight');  // <div> 요소에 'highlight' 클래스 추가

var hasClass = $('div').hasClass('highlight'); // <div> 요소가 'highlight' 클래스를 가지고 있는지 확인
console.log(hasClass); // 결과: true 또는 false

$('div').removeClass('highlight');//<div> 요소에서 'highlight' 클래스 제거

$('div').toggleClass('highlight'); // <div> 요소의 'highlight' 클래스를 토글(메서드는 선택한 요소에 클래스가 없으면 추가하고, 이미 클래스가 존재하면 제거)


[속성제어]
.attr() .prop() .removeAttr() .removeProp() .val()

var srcValue = $('img').attr('src'); // <img> 요소의 src 속성 가져오기
$('a').attr('href', 'http://example.com'); // <a> 요소의 href 속성 설정

var isChecked = $('input').prop('checked'); // <input> 요소의 checked 프로퍼티 가져오기
$('input').prop('checked', true); // <input> 요소의 checked 프로퍼티 설정

$('a').removeAttr('target'); // <a> 요소의 target 속성 제거
$('input').removeProp('checked'); // <input> 요소의 checked 프로퍼티 제거

var inputVal = $('input').val(); //  <input> 요소의 값 가져오기
$('input').val('newInputValue'); //  <input> 요소의 값 설정

*target 속성은 HTML에서 <a> (anchor) 요소 및 <form> 요소와 함께 사용되는 속성





