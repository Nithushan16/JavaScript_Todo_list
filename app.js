// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

// Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click',filterTodo);
//Functions
function addTodo(event){
    event.preventDefault(); // Prevent form from refreshing
    console.log("hi")
    //todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo") 

    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo);

    //Check Mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class ="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //Check Trash button
    const trashbutton = document.createElement('button');
    trashbutton.innerHTML = '<i class ="fas fa-trash"></i>';
    trashbutton.classList.add('trash-btn');
    todoDiv.appendChild(trashbutton);
    todoList.appendChild(todoDiv);

    //Clear Todo
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //delete todo
    if(item.classList[0]== "trash-btn"){
        const todo = item.parentElement;
        //ANIMATION
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function(){
            todo.remove()
        })
    }
    //check
    if(item.classList[0]=== "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos =todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display="none"
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else{
                    todo.style.display="none"
                    
                }
        }       
    });
}

