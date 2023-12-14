import './App.css';
import { useState } from "react";
import Task from './components/Task';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask'


function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [taskText, setTaskText] = useState(''); //this is the text that will be displayed in the input field when the edit button is clicked
  const [showEdit, setShowEdit] = useState(false);

  const handleAddTask = () => {
    setTaskList([...taskList, { text: task, completed: false }]);
    setTask("");
  }

  const handleEditTask = () => {
    setShowEdit(false);
    setTaskTextToList();
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

  const getTaskText = (index) => {

    return taskText;
  }

  const setTaskTextToList = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].text = taskText;
    setTaskList(newTaskList);
  }

  const editTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList[index].text = taskText;
    setTaskText('');
    setTaskList(newTaskList);
    setShowEdit(false);
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
                { !showEdit && (
                  <Task index={index} task={task} toggleCompleted={toggleCompleted} deleteTask={deleteTask} setShowEdit={setShowEdit}/>
                  )
                }                
                {showEdit && (
                    <EditTask index={index} taskText={taskText} getTaskText={getTaskText} setTaskText={setTaskText} editTask={editTask} handleEditTask={handleEditTask}/>
                  )
                }
              </ul>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
