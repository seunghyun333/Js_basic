<!-- 초기화 할 변수를 함수에 넣고 함수를 호출하면 간단하게 초기화 가능 // 1) 가독성 측면 2) 전역객체를 보호 -->

function initMain() {
	  
		//[1]Init All Single-Buttons Here
		$("#SearchButton").click(function(){ clickSearchButton(); return false;});      //조회 버튼 클릭
		$("#excelButton").click(function(){ gridExcelDownload(); return false;});			 //엑셀저장 버튼 클릭	
}

