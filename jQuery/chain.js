// jQuery의 메서드들은 반환값으로 자기 자신을 반환해야 한다는 규칙을 가지고 있다. 
// 이를 이용하면 한 번 선택한 대상에 대해서 연속적인 제어를 할 수 있다. 

예제1. jQuery를 이용해서 코딩하는 경우
<html>
  <body>
    <a id="tutorial" href="http://jquery.com" target="_self">jQuery></a>
    <script type="text/javascript" src="https://https://ajax.googleapis~/jquery.min.js"></script>
    <script type="text/javascript">
      jQuery('#tutorial').attr('href','http://jquery.org).attr('target','_blank').css('color'.'red);  
    </script>
  </body>
</html>

예제2. javascript의 DOM을 이용해서 코딩하는 경우
<html>
  <body>
    <a id="tutorial" href="http://jquery.com" target="_self">jQuery</a>
    <scirpt type="text/javascript">
      var tutorial = document.getElmentById('tutorial');
      tutorial.setAttribute('href','http://jquery.org');
      tutorial.setAttribute('target','_blank');
      tutorial.style.color = 'red';
    </scirpt>
  </body>
</html>


[chain의 장점]
1. 코드가 간결해진다.
2. 인간의 언어와 유사해서 사고의 자연스러운 과정과 일치함


[탐색(traversing)]
- chain의 대상을 바꿔서 체인을 계속 연장시킬 수 있는 방법
- 너무 복잡한 chain은 코드의 가독성을 떨어 뜨릴 수 있다. 

예제3. traversing을 이용해서 chain안에서 대상을 움직일 수 있다.
<html>
  <body>
    <ul class="first">
      <li class="foo"> list item1 </li>
      <li> list item2 </li>
      <li class="bar"> list item 3 </li>
    </ul>
    <ul class ="second">
      <li class="foo"> list item 1 </li>
      <li> list item 2 </li>
      <li class="bar"> list item 3 </li>
    </ul>
    <script type="text/javascript" src="https://ajax.googleais.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
    <script type="text/javascript"> $('ul.first').find('.foo').css('background-color','red').end().find('bar').css('background-color','green');</script>
  </body>
</html>


.find()
: 현재 선택된 element에 대해서 가장 끝 하위요소까지 이르는 모든 descendant들을 반환한다. 
  
.end()
: 현재 선택된 요소의 이전 요소를 선택하는 메서드 
