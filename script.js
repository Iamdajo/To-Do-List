const inputbox = document.getElementById("input-box");
const listConatiner = document.getElementById("list-container");
function AddTask(){
    if(inputbox === ' '){
        alert("Pridaj text!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listConatiner.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData()
}

listConatiner.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");  
        saveData() 
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

    },false)

    function saveData(){
        localStorage.setItem("data", listConatiner.innerHTML);
    }
    function showtask(){
        listConatiner.innerHTML = localStorage.getItem("data");
    }
    showtask();