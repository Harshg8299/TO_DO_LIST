function addTask()
{
    let newTask = document.getElementById("newTask").value;
    if(newTask == "")
    {
        alert("Please enter a task");
        return;
    }
    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerText = newTask;
    let listoftask = document.getElementById("taskList");
    // console.log(listoftask);
    taskList.appendChild(li);
    
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    li.appendChild(deleteBtn);

    let markdone = document.createElement("button");
    markdone.innerText = "Mark as Done";
    li.appendChild(markdone);

    deleteBtn.onclick = function()
    {
        listoftask.removeChild(li);
    }

    markdone.onclick = function()
    {
        li.classList.toggle("toggleClass");
        li.classList.toggle("markRed");
    }
    document.getElementById("newTask").value = "";
}
