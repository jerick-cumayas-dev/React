import { useState, useEffect } from 'react'
import List from './Lists.jsx'

function ToDoListApp() {
  const [taskInput, setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleOnChange = (e) => {
    setTaskInput(e.target.value);
  }

  const addTaskToList = (list, newTask) => {
    return [...list, newTask];
  }

  const handleSubmitButton = (e) => {
    if (taskInput != ''){
      const updatedList = addTaskToList(taskList, taskInput);
      localStorage.setItem('tasks', JSON.stringify(updatedList));
    }
  }

  useEffect(() => {
    setTaskInput('');
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks){
      setTaskList(storedTasks);
    }
  }, []);

  return (
    <>
      <div className="to-do-list">
        <div className="container">

          <form className="list-form" onSubmit = {handleSubmitButton}>
            <h1 id="testing-header">To Do List</h1>
            <input 
              id = "task-input"
              name = "task-input"
              type = "text"
              placeholder="example: do the laundry" 
              onChange = {handleOnChange}
            />
            <label id="haler">{taskInput}</label>
            <button id="add-task" type = "submit">Add Task</button>
          </form>

          <List data = {taskList}/>

        </div>
      </div>
    </>
  )
}

export default ToDoListApp
