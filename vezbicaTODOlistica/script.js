function addTask() {
  var input = document.getElementById("taskInput");
  var ul = document.getElementById("taskList");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}
