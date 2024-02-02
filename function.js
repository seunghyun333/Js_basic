<!-- 초기화 할 변수를 함수에 넣고 함수를 호출하면 간단하게 초기화 가능 // 1) 가독성 측면 2) 전역객체를 보호 -->

function initMain() {
	  
		//[1]Init All Single-Buttons Here
		$("#SearchButton").click(function(){ clickSearchButton(); return false;});      //조회 버튼 클릭
		$("#excelButton").click(function(){ gridExcelDownload(); return false;});			 //엑셀저장 버튼 클릭	
}


$("#CARR_NUM").keypress(function(){...});: 

이 코드는 jQuery를 사용하여 ID가 CARR_NUM인 HTML 요소(아마도 입력 필드 또는 유사한 것)를 선택합니다. 
그런 다음에는 그것에 keypress 이벤트 핸들러를 추가합니다. keypress 이벤트 핸들러 내부의 함수는 CARR_NUM 입력 필드 내에서 키가 눌릴 때 실행됩니다. 
이 함수 내에서 $("#MRN").val("");은 ID가 MRN인 HTML 요소의 값을 빈 문자열로 설정합니다.

$("#SCH_DT").focus(function(){...});: 
이 코드는 비슷하지만 ID가 SCH_DT인 HTML 요소에 적용됩니다. 
여기에는 focus 이벤트 핸들러가 추가되어 해당 요소가 포커스를 받았을 때(예: 클릭되었을 때) 실행됩니다. 
비슷하게 이벤트 핸들러 내부의 함수는 ID가 MRN인 HTML 요소의 값을 빈 문자열로 설정합니다.

두 경우 모두 사용자가 CARR_NUM 입력 필드(키를 눌러 상호 작용) 또는 SCH_DT 요소(클릭으로 상호 작용)와 상호 작용할 때 MRN ID를 가진 요소의 값을 빈 문자열("")로 설정합니다. 
이것을 하는 목적은 애플리케이션의 더 넓은 문맥에 따라 다를 수 있지만, 다른 요소에서 특정 사용자 동작에 대응하여 MRN 요소의 내용을 지우는 것으로 보입니다.
