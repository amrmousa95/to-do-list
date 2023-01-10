let input  = document.querySelector(".input");
let create = document.querySelector("#create");
// let tasks = document.querySelector("#tasks")

let title = document.createElement("h3")
let done  = document.createElement("button");



//save in localStorage
let tasks=[]
if(localStorage.task !=null){
    tasks = JSON.parse(localStorage.task)
    showTasks()
}
else{
    tasks = [];
}
create.addEventListener("click",function(){
   let newTask = {
    task:input.value
   }
   tasks.push(newTask)
   window.localStorage.setItem('task',JSON.stringify(tasks))

   showTasks()
   input.value = ""
})

//show tasks

function showTasks(){
    tasks = JSON.parse(localStorage.task)
    let table = '' 
    for(let i=0; i<tasks.length;i++){
        table += `
            <tr>
                <td class="task">${tasks[i].task}</td>
                <td> <button class="done" id="done" onclick="deleteTask(${i})">Done</button> </td>
            </tr>
        `
    }
    document.getElementById("tbody").innerHTML = table  
}

//finish task
function deleteTask(i){
    tasks.splice(i,1)
    localStorage.task = JSON.stringify(tasks)
    showTasks()
}
console.log(document.getElementsByClassName("task"))
//window.localStorage.clear()


