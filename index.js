"use strict";

let todoArray = [];
let inputNode = document.getElementById('todoList');
let resultNode = document.getElementById('todoList_result');
let childWindow; // 자식 창을 위한 변수
let currentIndex; // 현재 수정 중인 항목의 인덱스

// todoList를 출력해주는 함수
function printResult() {
    resultNode.innerHTML = ''; // 기존 결과를 비우기
    todoArray.forEach((value, index) => {
        resultNode.innerHTML += `
        <div id='checkbox-layout'>
            <li class='todo-checkbox' data-index='${index}'>${value}</li> 
            <div id='btn_layout'>
                <button class='modify_btn' onclick='goMemo(${index})'>수정</button>
                <button class='delete_btn' onclick='deleteList(${index})'>삭제</button>
            </div>
        </div>`;
    });
}

function goMemo(index) {
    currentIndex = index; // 수정할 항목의 인덱스를 저장
    if (childWindow) {
        childWindow.close(); // 이미 열린 자식 창이 있다면 닫기
    }
    
    childWindow = window.open('memo.html', '_blank', 'left=100, top=100, width=500, height=500');
    childWindow.onload = function() {
        const titleElement = childWindow.document.getElementById('title'); // memo.html에서 타이틀을 입력할 요소
        titleElement.innerText = todoArray[currentIndex]; // 수정할 항목의 텍스트
    };
}

function addList() {
    let todo = inputNode.value.trim();
    if (todo) {
        todoArray.push(todo);
        printResult();
        inputNode.value = ''; // 입력 필드 비우기
    }
}

function deleteList(index) {
    todoArray.splice(index, 1); // 해당 인덱스에서 항목 제거
    printResult(); // 삭제 후 다시 리스트를 출력
}

// memo.html에서 호출될 함수
function updateTodo(newTodo) {
    todoArray[currentIndex] = newTodo; // 수정한 항목으로 업데이트
    printResult(todoArray); // 수정 후 리스트를 다시 출력
}