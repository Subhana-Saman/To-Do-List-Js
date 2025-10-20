function addTask(){
let input = document.getElementById('taskInput')
let taskTest =input.value  
if(taskTest === ""){
    alert('Please enter a task!');
    return;
}
// create new list item

let li =document.createElement('li');
li.textContent = taskTest;

//create delete button
let delBtn = document.createElement('button');
delBtn.innerText = "❌";
delBtn.onclick =function(){
    li.remove()
}

// add button to li
li.appendChild(delBtn);

//add li to ul;

document.getElementById('toDoList').appendChild(li);

//
input.value = "";

}



