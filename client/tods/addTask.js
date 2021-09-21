
export const addTask = () => {
	let todo = document.getElementById('new-task').value;
	todos.push({id:lastId++, text: todo, isEdit: false});
	document.getElementById('new-task').value = '';
	renderUI()
	console.table(todos);
      }
      