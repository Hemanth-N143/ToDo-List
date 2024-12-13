function addTask(){
    var task=document.getElementById("input").value.trim()
    var priority = document.getElementById("priority").value;
    var tasklist=document.getElementById("tasklist")

    if(task==""){
        alert("Please enter the Task")
        return
    }
  
   var listitem=document.createElement('li')
   listitem.innerText=task
   if (priority === "low") {
    listitem.classList.add("priority-low");
    } else if (priority === "medium") {
    listitem.classList.add("priority-medium");
    } else if (priority === "high") {
    listitem.classList.add("priority-high");
}
   tasklist.appendChild(listitem)


   var button=document.createElement('div')
   listitem.appendChild(button)
   button.className="task-button"

   var deleteButton=document.createElement('button')
    deleteButton.className = "delete-btn"
    deleteButton.setAttribute("data-tooltip", "Delete")
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>'
    deleteButton.innerText="Delete"
    deleteButton.onclick=function(){
    tasklist.removeChild(listitem)
   }
   button.appendChild(deleteButton)


   var completeButton=document.createElement('button')
    completeButton.className = "complete-btn"
    completeButton.setAttribute("data-tooltip", "Complete")
    completeButton.innerHTML = '<i class="fas fa-check"></i>'
    completeButton.innerText="Complete"
    completeButton.onclick=function(){
    listitem.classList.toggle('Completed')
   }
   button.appendChild(completeButton)

   document.getElementById("input").value = "";
   document.getElementById("priority").value = "low";
}