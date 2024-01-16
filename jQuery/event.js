evnet
[이벤트란?]
  - 시스템에서 일어나는 사건을 의미
  - js나 jQuery에게 이벤트란 브라우저에서 일어나는 사건을 의미한다. (클릭, 마우스 이동, 타이핑, 페이지 로딩 등)
  - 이벤트가 발생했을 때 작동할 로직을 시스템에게 알려두면 이벤트가 발생했을 때 시스템이 그 로직을 호출한다.

[jQuery의 이벤트]
- 크로스브라우징의 문제를 해결해줌 
- bind로 이벤트 핸들러를 설치하고, unbind로 제거
- trigger로 이벤트 핸들러를 강제로 실행
- click, ready와 같이 다양한 이벤트 헬퍼를 제공함
- live를 이용하면 현재 존재하지 않는 엘리먼트에 이벤트 핸들러를 설치할 수 있음 

예제1. bind, unbind, trigger를 이용한 이벤트의 설치, 제거, 호출
<html>
  <head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
    <script type="text/javascript">
      function clickHanlder(e){
        alert('thank you');
      }
      $(document).bind('read',function(){
        $('#click_me').bind('click',clickHandler);
        
        $('#remove_event).bind('click', function(e){
          $('click_me').unbind('click',clickHandler);
        });

        $('#trigger_event').bind('click', function(e){
          $('#click_me).trigger('click');
        });
      })
    </script>
  </head>
  <body>
        <input id="click_me" type="button" value="click_me" />
        <input id="remove_evnet" type="button" value="unbind" />
        <input id="trigger_event" type="button" value="trigger" />
  </body>
</html>


예제2. 이벤트 헬퍼
<html>
  <head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
    <script type="text/javascript">
      function clickHandler(e){
        alert('thank you');
      }
      $(document).ready(function)(){
        $('#click_me').click(clickHandler);
        $('#remove_event).click(function(e){
          $('#click_me).unbind('click', clickHandler);
      });
        $('#triiger_event').click(function(e){
          $('#click_me).trigger('click');
        });
      })
    </script>  
  </head>
  <body>
    <input id="click_me" type="button" value="click_me" />
    <input id="remove_evnet" type="button" value="unbind" />
    <input id="trigger_event" type="button" value="trigger" />
  </body>
</html>
