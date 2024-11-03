const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        if (listContainer.firstChild) {
            listContainer.insertBefore(li, listContainer.firstChild);
        } 
        let span = document.createElement("span")
        span.innerHTML = '<i class="fa-solid fa-trash"></i>';
        span.onclick = function() {
            li.remove();
        };

        let editSpan = document.createElement("span")
        editSpan.innerHTML = '<i class="fa-solid fa-pencil-alt"></i>';
        editSpan.onclick = function(){
            inputBox.value = li.textContent
            li.remove();
        }

        li.appendChild(editSpan);
        li.appendChild(span)
    }
    inputBox.value = "";
}
