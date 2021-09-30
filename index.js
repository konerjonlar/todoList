// add delete button as dinamic
var list = document.getElementsByTagName("li");
var newitem = document.getElementById("task");
var ul = document.getElementById("list")
let btn = document.createElement("button");
btn.innerHTML = "x";
btn.classList.add("delete","btn", "btn-danger");

for (var i = 0; i < list.length; i++) {
  // cloneNode olmadan 1 tane ekliyordu
  list[i].appendChild(btn.cloneNode(true));

}

// değiştirlebilirdim ama akılda kalıcı olsun diye bunu da ekledim
// cloneNode bağlı eventları da kopyalamıyor diye alttaki döngüyü ekledim
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", liClick);
}
for (const item of list) {
  item.childNodes[1].addEventListener("click", deleteClick);
}
function deleteClick() {
  //localStorage.removeItem(Array.prototype.indexOf.call(ul.children, this.parentNode));
  this.parentElement.remove();
  localStorage.clear();
  localStorageAdd();
}
// üstünü çizilecek maddenin classı ekleyip silme
function liClick() {
  this.classList.toggle("done");
}

function inputLength() {
  return newitem.value.length;
}

//ben yazdığım için geliştirilebilir
function createListElement(){
    li = document.createElement("li");
    li.appendChild(document.createTextNode(newitem.value));
    li.appendChild(btn.cloneNode(true));
    li.childNodes[1].addEventListener("click", deleteClick)
    li.addEventListener("click", liClick);
    ul.appendChild(li);
    localStorage.setItem(localStorage.length,JSON.stringify(newitem.value));
}

function newElement() {
  if (inputLength() > 0) {
    createListElement();
  }
  else {
    alert("task giriniz")}
}

function addListAfterEnter(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
  
}
newitem.addEventListener("keypress", addListAfterEnter);

function localStorageAdd(){
    for (var i = 0; i < list.length; i++) {
        // cloneNode olmadan 1 tane ekliyordu

        localStorage.setItem(i,JSON.stringify(list[i].textContent.slice(0,list[i].textContent.length-1)));
      }
}
