let inputnew = document.getElementById("input");

let buttun = document.querySelector(".btn");
let maindiv = document.querySelector(".todo");
let main = document.querySelector(".main");


//add new div

buttun.addEventListener("click", (eo) => {
  eo.preventDefault();
  if (inputnew.value != "") {
   let neww = `
<div class="tasks" draggable="true">
    <p class="item" > ${inputnew.value}</p>
    <div class="span">
    <span class="sp"><i class="fa-solid fa-check"></i></span>
    <span><i class="fa-solid fa-trash-can"></i></span>
  </div>
    

  </div>
`;
  maindiv.innerHTML += neww;
    inputnew.value = "";
    localStorage.setItem("tod", maindiv.innerHTML );
  }
  drageitem();
});

window.onload = function () {
  let gititem = localStorage.getItem("tod");
  if (gititem) {
    maindiv.innerHTML = gititem;
  }
};

// delet div

maindiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    e.target.parentElement.parentElement.parentElement.remove();
  } else if (e.target.classList.contains("fa-check")) {
    e.target.classList.replace("fa-check", "fa-face-grin-hearts");
    e.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "#58d558";
  }
  localStorage.setItem("tod", maindiv.innerHTML);


});

//Drag & Drop
let drag = null;
let boxes = document.querySelectorAll(".box");

let delet = document.querySelector(".delet");


function drageitem() {
  // let items = document.querySelectorAll(".item");
  let task = document.querySelectorAll(".tasks");

  task.forEach((tasks) => {
    tasks.addEventListener("dragstart", function () {
      drag = tasks;
      tasks.style.opacity = "0.5";
      delet.style.display = "block";
    });

    tasks.addEventListener("dragend", function () {
      drag = null;
      tasks.style.opacity = "1";
    });

    boxes.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.border = "1px solid red";
        this.style.paddingBottom = "100px";

      });

      box.addEventListener("dragleave", function () {
        this.style.border = "none";
      });
      box.addEventListener("drop", function () {
        this.append(drag);
        this.style.marginTop = " 10px";
        this.style.border="1px solid blueviolet";
        localStorage.setItem("tod", maindiv.innerHTML );
      });
    });
  });
}


  //delet elements

var childElements = boxes[2].children;

boxes[2].onclick = function (e) {
  if (e.target.classList.contains("delet")) {
    for (var i = childElements.length - 1; i > 0; i--) {
      boxes[2].removeChild(childElements[i]);
      e.target.style.display="none"
      e.target.parentElement.style.border="none";
      
    }



  }
};


