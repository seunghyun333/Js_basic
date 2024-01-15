래퍼(wrapper)란?
=> jQuery(엘리먼트 오브젝트 | 'CSS스타일 선택자')
    레퍼    인자

[레퍼의 안전한 사용]

$(엘리먼트)와 jQuery(엘리먼트)는 같은 의미지만 $를 사용하는 다른 라이브러리들과의 충돌때문에 다음과 같은 방법을 사용한다.

1.
<script type="text/javascript">
    //$를 함수의 지역변수로 선언해서 외부에 있을지 모르는 타 라이브러리의 $와의 충돌을 예방
jQuery('body').html("hello world");
</script>


2.
<script type="text/javascript">
//$ 대신 jQuery를 사용

(function($){
    //jQuery 코드가 위치함
    $('body').html('hello world');
})(jQuery)
</script>



[제어 대상을 지정하는 방법]
* jQuery(selector.[context])
* jQuery(element)

예제1 jQuery(selector.[context])
<html>
    <body>
        <ul>
            <li>test2</li>
        </ul>
        <ul class="foo">
            <li>test</li>
        </ul>
        <script type="text/javascript" src="jquery***"></script>
        <script type="text/javascript">
            (function($){
                $('ul.foo').click(function(){
                    $('li',this).css('background-color','red');
                });
            })(jQuery)
        </script>
    </body>
 </html>

예제2 jQuery(element)
<html>
    <body>
    <script type="text/javascript" src="jquery***"></script>
        <script type="text/javascript">
        jQuery(document.body).css("background-color","black");
        </script>
    </body>
</html>