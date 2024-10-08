"use strict";

window.onload = function() {
    // 부모 창에서 전달된 데이터 사용
    if (mainData) {
        document.querySelector('.title').textContent = mainData;  // 제목에 표시
    }
};

function cancel_btn() {
    window.close()
}

// 예시: 수정 완료 버튼 클릭 시
function ok_btn() {
    const todoText = document.getElementById('title').innerText; // 타이틀 가져오기   
    opener.updateTodo(title); // 부모 창의 updateTodo 호출
    alert('수정 완료되었습니다!')
}