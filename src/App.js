import './App.css';
import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

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

  return (
    <div className="App">
      <header className="App-header">
        
        <label>
          Task: <input className="input" value={task} onChange={e => setTask(e.target.value)}/>
        </label>
        {/* Whenever a task is added, the completed property is also added to the task in the */}
        <button className="button" onClick={() => setTaskList([...taskList, { text: task, completed: false }])}> 
          Add
        </button>
        
        <p>
          {taskList.map((task, index) =>
              <ul key={index}>
                  <input 
                    type="checkbox" 
                    checked={task.completed} 
                    onChange={() => toggleCompleted(index)}
                  /> 
                  <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.text}
                  </span>
                  <button onClick={() => deleteTask(index)}>
                    Delete
                  </button>
              </ul>
          )}
        </p>
      </header>
    </div>
  );
}

export default App;
