import "./styles.css";
// Get some elements of the page
const doing_lst = document.querySelector("#doing");
const done_lst = document.querySelector("#done");
const form = document.querySelector("#todo_form");
const todoInput = document.querySelector("#todo_input");

let todoDoing = [];
let todoDone = [];

let todoDoingIndex = 0;
let todoDoneIndex = 0;

function displayTodo(todos, list, listName) {
  list.innerHTML = "";
  // For tout les elements on appel la function
  todos.forEach((Element) => {
    const item = document.createElement("li");
    const textContainer = document.createElement("span");
    const deleteButton = document.createElement("button");
    textContainer.innerText = Element.text;
    deleteButton.innerText = "delete";
    deleteButton.classList.add(
      "border-2",
      "bg-red-500",
      "px-4",
      "py-2",
      "rounded-md",
      "ml-5",
      "border-5",
      "border-sky-500"
    );
    deleteButton.onclick = () => {
      if (listName === "doing") {
        todoDoing = todoDoing.filter((Element2) => Element2.id != Element.id);
        displayTodo(todoDoing, doing_lst, "doing");
      } else {
        todoDone = todoDone.filter((Element2) => Element2.id !== Element.id);
        displayTodo(todoDone, done_lst, "done");
      }
    };
    item.appendChild(textContainer);
    item.appendChild(deleteButton);
    if (listName === "doing") {
      const doneButton = document.createElement("button");
      doneButton.innerText = "done";
      doneButton.classList.add(
        "border-2",
        "bg-green-500",
        "px-4",
        "py-2",
        "rounded-md",
        "ml-5",
        "border-5",
        "border-sky-500"
      );
      item.appendChild(doneButton);
      doneButton.onclick = () => {
        todoDone.push({
          id: todoDoneIndex++,
          text: Element.text,
        });
        todoDoing = todoDoing.filter((Element2) => Element2.id != Element.id);
        displayTodo(todoDoing, doing_lst, "doing");
        displayTodo(todoDone, done_lst, "done");
      };
    }
    list.appendChild(item);
  });
}

function addTodo() {
  const todoValue = todoInput.value;
  todoDoing.push(
    // On push un objet ( entre crochet )
    {
      id: todoDoingIndex++,
      text: todoValue,
    }
  );
  displayTodo(todoDoing, doing_lst, "doing");
  todoInput.value = "";
}

function handleSubmit(e) {
  // Sert a dire "tu n envois pas le form"
  e.preventDefault();
  addTodo();
}

form.onsubmit = handleSubmit;
