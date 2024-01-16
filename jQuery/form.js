폼
- 서버로 데이터를 전송하기 위한 수단
- jQuery는 폼을 제어하는데 필요한 이벤트와 메서드를 제공한다. 
- jQuery 폼 API 문서 : http://api.jquery.com/category/forms/



예제1. [.focus() .blur() .change() .select()]
<head>
  <style>
    span{}
  </style>
  <script src="http://code/jquery.com/jquery-latest.js"></script>
</head>
<body>
    <p>
      <input type="password" />
      <span></span>
    </p>
    <script>
      $("input").focus(function (e) {
        $(this).next("span").html('focus');     //next: this 뒤에 엘리먼트 중 span 찾기
      }).blur( function(e) {                    //blur:  요소에서 포커스가 떠날 때 발생하는 이벤트
        $(this).next("span").html('blur');
      }).change(function(e){                      //$ 선택된 input 요소의 내용이 바뀌면 실행되는 이벤트 
                alert('change!! '+(e.target).val());
          }).select(function(){
              $(this).next('span').html('select');
          });
    </script>      
  </body>


예제2. [.submit() .val()]
<html>
  <head>
    <style>
      p {
        margin:0;
        color:blue;
      }
      div, p {
          margin-left:10px;
      }
      span {
          color:red;
      }
    </style>
    <script src="http://code.jquery.com/jquery-latest.js"></script> 
    </head>
    <body>
      <p>
        Type 'correct' to validate.
      </p>
      <form action="javascript:alart('success!');">
        <div>
          <input type="text" />

          <input type="submit" />
        </div>
      </form>
      <span></span>
      <script>
        $("form").submit( function() {
          if ($("input:first").val() == "correct") {
            $("span").text("Validated...").show();
            return true;
        }
        $("span").text("Not valid!").show().fadeOut(1000);
        return false;
        });
      </script>
    </body>
</html>


