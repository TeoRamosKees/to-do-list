import './App.css';
import { useEffect, useState } from "react";
import Task from './components/Task';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask'


function App() {
  
  const tasksStored = JSON.parse(localStorage.getItem("taskList"));

  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState(tasksStored || []);
  const [taskText, setTaskText] = useState(''); //this is the text that will be displayed in the input field when the edit button is clicked
  const [showEdit, setShowEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);


  useEffect(() => {
    //Sorting tasks by completed property
    const sortedList = [...taskList].sort((a, b) => a.completed - b.completed);
    setTaskList(sortedList);

    //Storing tasks in local storage
    localStorage.setItem("taskList", JSON.stringify(taskList));

  }, [taskList]);

  const handleAddTask = () => {
    if (task !== "") {
      setTaskList([...taskList, { text: task, completed: false }]);
      setTask("");
    }
  }

  const handleEditTask = () => {
    setShowEdit(false);
    setTaskTextToList();
  }

  const handleCancelEdit = () => {
    setShowEdit(false);
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

  const getTaskText = () => {
    return taskList[editIndex].text;
  }

  const setTaskTextToList = () => {
    const newTaskList = [...taskList];
    newTaskList[editIndex].text = taskText;
    setTaskList(newTaskList);
  }

  const setEditWithIndex = (index) => {
    setEditIndex(index);
    setShowEdit(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <AddTask 
          task={task} 
          setTask={setTask} 
          handleAddTask={handleAddTask}
        />

        {/* Whenever a task is added, the completed property is also added to the task in the */}

        <div className='tasksContainer'>
          {taskList.map((task, index) =>
              <ul key={index}>
                  <Task 
                    index={index} 
                    task={task} 
                    toggleCompleted={toggleCompleted} 
                    deleteTask={deleteTask} 
                    setEditWithIndex={setEditWithIndex}
                  />                
              </ul>
          )}
        </div>
        {showEdit && (
          <div className='overlay'>
            <div className="edit-task-container">
              <EditTask 
                getTaskText={getTaskText} 
                setTaskText={setTaskText} 
                handleEditTask={handleEditTask}
                handleCancelEdit={handleCancelEdit}
              />  
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
