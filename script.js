let tasks = [];
let count = 0;
let ul = document.getElementById("main");

let btn = document.getElementById("btnAddTask");
btn.addEventListener("click", addTask);

function addTask() {
  let input = document.getElementById("inputTask");
  let task = { id: count++, text: input.value, completed: false };
  input.value = "";
  tasks.push(task);
  ul.innerHTML = ""
  pushListItem();
  }

function pushListItem() {
  tasks.forEach((task) => {
    createListItem(task);
  });
}

function createListItem(task) {
  let input = document.createElement("input");
  input.type = "checkbox";

  let p = document.createElement("p");
  p.innerHTML = task.text;

  let imgRename = document.createElement("img");
  imgRename.src = "/img/rename.png";

  let imgDelete = document.createElement("img");
  imgDelete.src = "/img/trash.png";

  let li = document.createElement("li");
  li.className = "task";
  li.append(input);
  li.append(p);
  li.append(imgRename);
  li.append(imgDelete);

  ul.append(li);
}
