"use strict"

let todoArray = []

let inputNode = document.getElementById('todoList')
let resultNode = document.getElementById('todoList_result')

// todoList를 출력해주는 함수
function printResult(array) {
    let result = ''
    array.forEach((value, index) => {
        result += `
        <div id='checkbox-layout'>
            <li class='todo-checkbox' data-index='${index}'>${value}</li> 
            <div id='btn_layout'>
                <button class='modify_btn' onclick='goMemo()'>수정</button>
                <button class='delete_btn' onclick='deleteList()'>삭제</button>
            </div>
        </div>`
    })
    resultNode.innerHTML = result
}

function goMemo() {
    window.open('memo.html', '_blank', 'left=100, top=100, width=500, height=500')
}

function addList() {
    let todo = inputNode.value
    todoArray.push(todo)
    printResult(todoArray)
    inputNode.value = ''  // 입력 필드를 비워줌
}

function deleteList() {
    // 체크된 항목들만 삭제 (뒤에서부터 삭제)
    let checkboxes = document.querySelectorAll('.todo-checkbox')
    for (let i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            let index = checkboxes[i].getAttribute('data-index')
            todoArray.splice(index, 1)  // 해당 인덱스에서 항목 제거
        }
    }
    // 삭제 후 다시 리스트를 출력
    printResult(todoArray)
}