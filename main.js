let inputnew = document.getElementById("input");

let buttun = document.querySelector(".btn");
let maindiv = document.querySelector(".todo");
let main = document.querySelector(".main");




//add new div

buttun.addEventListener("click", (eo) => {
  eo.preventDefault();
  if (inputnew.value != "") {
    let neww = `
<div class="tasks">
    <p class="item" draggable="true"> ${inputnew.value}</p>
    <div>
  <span class="sp"><i class="fa-solid fa-check"></i></span>
  <span><i class="fa-solid fa-trash-can"></i></span>
</div>
    
  </div>
`;
  maindiv.innerHTML += neww;
    inputnew.value = "";
    localStorage.setItem("tod", maindiv.innerHTML);
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
    localStorage.setItem("tod", maindiv.innerHTML);
  } else if (e.target.classList.contains("fa-check")) {
    e.target.classList.replace("fa-check", "fa-face-grin-hearts");
    e.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "#58d558";
  }
});

//Drag & Drop
let drag = null;
let boxes = document.querySelectorAll(".box");

let delet= document.querySelector(".delet");



function drageitem() {
  let items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      item.style.opacity = "0.5";
      delet.style.display = 'block';

    });

    item.addEventListener("dragend", function () {
      drag = null;
      item.style.opacity = "1";
    });

    boxes.forEach((box) => {
      box.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.style.backgroundColor = "#a996ba";

      });

      box.addEventListener("dragleave", function () {
        this.style.backgroundColor = "#fff";
        
        
      });
      box.addEventListener("drop", function () {
        
        this.append(drag);
        this.style.backgroundColor = "#fff";
      

      });

    });
  });
}







//delet elements

var childElements = boxes[2].children;

boxes[2].onclick = function(e) {

if(e.target.classList.contains("delet")){

  for (var i = childElements.length - 1; i > 0; i--) {
    boxes[2].removeChild(childElements[i]);
  }

}

}




//delet tasks

maindiv.addEventListener("dragleave", e=>{

e.target.parentElement.style.display="none";
localStorage.setItem("tod", maindiv.innerHTML);


})



