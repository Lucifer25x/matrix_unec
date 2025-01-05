// Initialize the Sortable.js library
new Sortable(document.querySelector(".list"), {
  animation: 150,
  ghostClass: "blue-background-class",
});

// Initiliaze AOS
AOS.init();

// Variables
const list = document.querySelector(".list");
const empty = document.querySelector(".empty");
const form = document.getElementById("add");
const todo = document.getElementById("todo");
const pending_count = document.getElementById("pending");
const check_all = document.getElementById("check_all");
const invert_all = document.getElementById("invert_all");
const delete_all = document.getElementById("delete_all");

// Show the empty element if the list is empty
function isEmpty() {
  if (list.childNodes.length == 0) {
    empty.classList.add("show");
    list.classList.add("hide");
  } else {
    empty.classList.remove("show");
    list.classList.remove("hide");
  }
}

// Show the number of pending todos
function count_pending(){
  let count = 0;
  list.childNodes.forEach((node) => {
    if(node.childNodes[0].classList.length == 0){
      count += 1
    }
  });
  pending_count.textContent = count;
}

// Add new to do
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todo.value.length == 0) {
    alert("You should write something into input!");
  } else {
    const todo_val = todo.value;

    // Create the div element and its children
    const div = document.createElement("div");
    const span = document.createElement("span");
    const i = document.createElement("i");

    span.textContent = todo_val;
    i.classList.add("ri-delete-bin-7-fill");

    div.appendChild(span);
    div.appendChild(i);

    // Add animation
    div.setAttribute('data-aos', 'fade-down');
    div.setAttribute('data-aos-duration', '1000');
    AOS.refresh();

    // Append to the list
    list.appendChild(div);

    // Reset the input
    todo.value = "";

    // Add events for elements
    span.addEventListener("click", () => {
      span.classList.toggle("done");
      count_pending();
    });

    // Delete the element
    i.addEventListener("click", () => {
      if(confirm("Do you really want to delete the element?") == true){
        list.removeChild(div);
        isEmpty();
        count_pending();
      }
    });

    isEmpty();
    count_pending();
  }
});

// Check all
check_all.addEventListener("click", () => {
  list.childNodes.forEach((node) => {
    node.childNodes[0].classList.add("done");
  });
  count_pending();
});

// Invert all
invert_all.addEventListener("click", () => {
  list.childNodes.forEach((node) => {
    node.childNodes[0].classList.toggle("done");
  });
  count_pending();
});

// Delete all
delete_all.addEventListener("click", () => {
  if(confirm("Do you really want to delete all the elements?") == true){
    list.innerHTML = '';
    isEmpty();
  }
  count_pending();
});

// Do the necessary things when window is loaded
window.addEventListener("load", () => {
  isEmpty();
  count_pending();
});
