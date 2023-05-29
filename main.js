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





//Drag & Drop
let drag = null;
let boxes = document.querySelectorAll(".box");



function drageitem() {
  let task = document.querySelectorAll(".tasks");

  task.forEach((tasks) => {
    tasks.addEventListener("dragstart", function () {
      drag = tasks;
      tasks.style.opacity = "1";

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
      
        localStorage.setItem("task1", boxes[0].innerHTML );
        localStorage.setItem("task2", boxes[1].innerHTML );
        localStorage.setItem("task3", boxes[2].innerHTML );
      

      });
    });
  });
}



// delet fa-trash-can


main.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    e.target.parentElement.parentElement.parentElement.remove();
    boxes[2].style.border="none";

  } else if (e.target.classList.contains("fa-check")) {
    e.target.classList.replace("fa-check", "fa-face-grin-hearts");
    e.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "#58d558";

  }
  localStorage.setItem("tod", maindiv.innerHTML);
  localStorage.setItem("task3", boxes[2].innerHTML );


});

// onload page

window.onload = function () {
  let gititem = localStorage.getItem("tod");
  if (gititem) {
    maindiv.innerHTML = gititem;
    
  }

// 

let gittask1 = localStorage.getItem("task1");
if (gittask1) {
  boxes[0].innerHTML += gittask1;
}

let gittask2 = localStorage.getItem("task2");
if (gittask2) {
  boxes[1].innerHTML += gittask2;
  
}

let gittask3 = localStorage.getItem("task3");
if (gittask3) {
  boxes[2].innerHTML += gittask3;
  
  
}


}




