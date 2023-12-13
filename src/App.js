import './App.css';
import { useState } from "react";
import Task from './components/Task';
import AddTask from './components/AddTask';

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    setTaskList([...taskList, { text: task, completed: false }]);
    setTask("");
  }
  
  const deleteTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  }

  const toggleCompleted = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].completed = !newTaskList[index].completed; //gives opposite of current state value
    setTaskList(newTaskList);
  }

  const editTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].text = task;
    setTaskList(newTaskList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <AddTask task={task} setTask={setTask} handleAddTask={handleAddTask}/>

        {/* Whenever a task is added, the completed property is also added to the task in the */}

        <div className='tasksContainer'>
          {taskList.map((task, index) =>
              <ul key={index}>
                <Task index={index} task={task} toggleCompleted={toggleCompleted} deleteTask={deleteTask} editTask={editTask}/>
              </ul>
          )}
        </div>
        
      </header>
    </div>
  );
}

export default App;
