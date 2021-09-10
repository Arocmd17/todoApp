(function name() {
  console.log('The css is working as well as the js')
})()

let todos = [];
let lastId =1;
let isEdit = false
let addTask = () => {
  let todo = document.getElementById('new-task').value;
  todos.push(todo);
  render(todo)
}

let deleteTask = (e) =>{
  let index = document.getElementById(this.id)
  // todos = todos.filter((todo)=>{return todo !== todos[e.target.id]})
  // delete todos[e.target.id]
  todos.splice(e.target.id,1)
  render();
  console.log(todos)
}
let saveTask = (e) => {
  let index = e.target.id.substring(4)
  todos[index] = document.getElementsByClassName('to-do')[index].value;
  
  console.log(todos)
  console.log(index)
  render();
}
let clearTask = () => {
  todos = []
  render();
}
function renderUI(){
  // render all default element
  // [{text:'', id:lastId++}]
  todos.map(todo=>{
    let itemElement = document.createElement('li')
  itemElement.textContent = todo.text
  itemElement.attributes('id', lastId++);
  })
}

function doDeleteItem(id){
// look for the item from the to do list
document.getElementById(`${id}`)

// remove the item from todo list
// renderUI
}
// mixins
function renderButtons(type){
  switch (type) {
    case 'save':
      renderUIElements({button:'save'})
      break;
  
    default:
      break;
  }
}

function doSaveItem(){
if(!isEdit) return;
renderButtons('save')
}

const renderUIElements =(args)=>{
  const parent = document.getElementById("todos")
const listElements = document.createElement('ul')
todos.map(todo=>{
  const listItem = document
})
const container = document.createElement('div')
}



let render = () =>{
  let index = 0;
  document.getElementById("to-dos").innerHTML="";
  todos.forEach(todo => {
    // if(todo !== null){
      let nodespan, btnArea, btnArea_initial, btnArea_edit
      nodespan = document.createElement("span");
      let node = document.createElement("input");
      node.classList.add('to-do'); 
      node.addEventListener('keyup',(e) => {showSave(e)});
      node.value =todo;
      nodespan.appendChild(node);

      btnArea = document.createElement("span");
      btnArea_initial = document.createElement("span");
      btnArea_initial.classList.add('btn-area');
      btnArea_edit = document.createElement("span");

      
      let btn = document.createElement("button");
      let textbtn = document.createTextNode('Delete'); 
      btn.appendChild(textbtn); 
      btn.classList.add('delete-btn');
      btn.setAttribute('id',index );
      btn.addEventListener('click',(e) => {deleteTask(e)});
      btnArea_initial.append(btn) 
       
      let editBtn = document.createElement("button");
      let texteditbtn = document.createTextNode('Save'); 
      editBtn.appendChild(texteditbtn); 
      editBtn.classList.add('save-btn');
      editBtn.setAttribute('id','save'+index );
      editBtn.addEventListener('click',(e) => {saveTask(e)});  
      btnArea_initial.appendChild(editBtn) 
      
      btnArea.appendChild(btnArea_initial)
      btnArea.appendChild(btnArea_edit)
      nodespan.appendChild(btnArea)                      
      document.getElementById("to-dos").appendChild(nodespan);
      index++;
    // }
  })
  document.getElementById('new-task').value = '';
  document.getElementById('count').innerHTML = todos.length;
}
// d3.select();
d3.selectAll("p").style("color", "red");