const todoList=[{name:'make dinner',
dueDate:'2025-05-22'},{name:'wash dishes',dueDate:'2025-06-22'}];
renderList();
function renderList(){
  let todoListHTML='';

  for (let i=0;i<todoList.length;i++){
    const todoObject = todoList[i];
    
    const {name,dueDate} = todoObject;

    const html=`
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i},1);
      renderList();
    " class="delete-button">Delete</button>
    `;
    todoListHTML+=html;

  }

  document.querySelector('.js-todo-list')
    .innerHTML=todoListHTML;
}
function addTodo(){
  const inputElem = document.querySelector('.js-name-input');
  const name = inputElem.value;
  const dateInputElement=document.querySelector('.js-due-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({name,dueDate});
  console.log(todoList);

  renderList();
}

