var input = document.querySelector('.inputDom');
var task = document.querySelector('.list');
var taskList = [];
function unorder(elements){
  task.innerHTML = '';
  elements.forEach(e=>{
    var createList = document.createElement('li');
    createList.innerHTML = e;
    task.appendChild(createList);
  });
}

//unorder(['task','test','araf']);

input.addEventListener('keyup', f =>{
  if(f.which === 13 && input.value !== ''){
    taskList.push(input.value);
    input.value = '';
    unorder(taskList);
  }
});
