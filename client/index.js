let todos = [];
let lastId =0;
const fetchData = () => {
  let data = localStorage.getItem('to-do')
  if(data === null){
    localStorage.setItem('to-do','[]')
  }else{
    todos = JSON.parse(data)
  }
}
window.onload = fetchData()


// {id:1, text:'test'}, {id:2, text:'test'}, {id:3, text:'test'}

let addTask = () => {
  let todo = document.getElementById('new-task').value;
  todos.push({id:lastId++, text: todo, isEdit: false});
  document.getElementById('new-task').value = '';
  localStorage.setItem('to-do',JSON.stringify(todos));
  renderUI()
  console.table(todos);
}

let deleteTask = (id) =>{
  id = id.substring(7)//1

  console.log(id)
  let indexSearch = todos.findIndex(x => x.id == id)
  console.log(indexSearch)
  console.log(todos[id])
  console.log(todos)
  // console.log(todo)
  console.log(todos.length)
  // todos.splice(todos[id].id,1)

  todos.splice(indexSearch,1)
  renderUI()
  console.table(todos);
  localStorage.setItem('to-do',JSON.stringify(todos));
  if(todos.length === 0){lastId = 0} // reset the counter
}
let saveTask = (id) => {
  id = id.substring(5)
  todos[id].text = document.getElementById(id).value;
  todos[id].isEdit= false;
  renderUI()
  console.log(id)
  console.log(todos[id])
  console.table(todos);
  localStorage.setItem('to-do',JSON.stringify(todos));
}
let clearTask = () => {
  todos = [];
  lastId = 0;
  renderUI();
  localStorage.setItem('to-do',JSON.stringify(todos));
}
function renderUI(){
  let isEdit = false;
  document.getElementById("to-dos").innerHTML="";
  // render all default element
  const parent = document.getElementById("to-dos")
  let listElement = document.createElement('ol')
  parent.appendChild(listElement)
  todos.map(todo=>{
    let itemElement = document.createElement('li')
    let itemDiv = document.createElement('div')
    itemDiv.setAttribute('class','to-do');
    let itemDiv_text
    (todo.isEdit === false) ? itemDiv_text = document.createElement('div'): 
                      itemDiv_text = document.createElement('input')
    itemDiv_text.setAttribute('class','to-do-text');
    itemDiv_text.setAttribute('id', todo.id);
    if(todo.isEdit === false){
      itemDiv_text.addEventListener('click',(e) => {console.log(e.target); todos[e.target.id].isEdit = true; renderUI() });
    }{
      itemDiv_text.addEventListener('blur',(e) => {console.log(e.target); todos[e.target.id].isEdit = false;  });
    }
      
    let itemDiv_btn = document.createElement('div')
    itemDiv_btn.setAttribute('class','to-do-btn');
    
    itemDiv.appendChild(itemDiv_text)
    itemDiv.appendChild(itemDiv_btn)
    itemElement.appendChild(itemDiv)

    itemDiv_text.textContent = todo.text;
    itemDiv_text.value= todo.text;
    listElement.appendChild(itemElement)
    if (todo.isEdit===false) {renderSwitch(itemDiv_btn, 'delete', todo.id)}
      else {renderSwitch(itemDiv_btn, 'save', todo.id)}                
    
  })
  document.getElementById('count').innerHTML = todos.length;
}
// mixins
function renderSwitch(parent, type, id){
  switch (type) {
    case 'save':
      renderUIElements({button:'save', node: parent, id})
      break;
    case 'edit':
      renderUIElements({button:'edit', node: parent, id})
      break;
    case 'delete':
      renderUIElements({button:'delete', node: parent, id})
      break;
      case 'div':
        renderUIElements({div:'div'}, 'to-do')
        break;
    default:
      break;
  }
}
const renderUIElements =(args)=>{
  let element = Object.keys(args)[0];
  // const parent = document.getElementsByClassName('to-do-btn')[lastId]
  const listElements = document.createElement(element)
  const elementText = document.createTextNode(args[element]);
  args.node.appendChild(listElements)
  listElements.appendChild(elementText)
  if(args[element] === 'delete'){
    listElements.setAttribute('id', "delete_"+args.id);
    listElements.setAttribute('class', "delete-btn");
    // some
    listElements.addEventListener('click',(e) => {deleteTask(e.target.id);});
  }
  if(args[element] === 'save'){
    listElements.setAttribute('id', "save_"+args.id);
    listElements.setAttribute('class', "save-btn");
    listElements.addEventListener('click',(e) => {saveTask(e.target.id);});
  }
  if(args[element] === 'div'){
    listElements.addEventListener('click',(e) => {saveTask(e.target.id);});
  }
}
renderUI()