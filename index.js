const tasks = [];

function greet() {
  alert('환영합니다!');
}

function inputUserName() {
  const name = prompt('이름 : ');
  const nameButton = document.getElementById("name");
  if (name) {
    nameButton.textContent = `${name}님의 To Do List`;
  } else {
    nameButton.textContent = "이름";
  }
}

function addTask() {
  const content = document.querySelector("input[name=content]").value;
  const manager = document.querySelector("input[name=manager]").value;
  const obj = {
    content: content,
    manager: manager
  };
  tasks.push(obj);
  console.log(tasks);
}

function saveTasks() {
  const jsonStr = JSON.stringify(tasks);
  localStorage.setItem("todo", jsonStr);
}

function showTasks() {
  const result = localStorage.getItem("todo");
  const arr = JSON.parse(result);
  const divTag = document.querySelector("#todo-list");
  divTag.innerHTML = "";
  for (let obj of arr) {
    const h3tag = document.createElement("h3");
    h3tag.innerText = `${obj.manager} : ${obj.content}`;
    divTag.appendChild(h3tag);
  }
}

