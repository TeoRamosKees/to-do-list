

function Task(props){
    return (
        <div className='container'>
            <input 
                type="checkbox" 
                checked={props.task.completed} 
                onChange={() => props.toggleCompleted(props.index)}
            /> 
            <span style={{ textDecoration: props.task.completed ? 'line-through' : 'none' }}> 
                {props.task.text} 
            </span>
            <div className='container'>
                <img 
                src='trashCanLogo.png' 
                alt='trash can' 
                onClick={() => props.deleteTask(props.index)} 
                width='25px'
                />
            </div>
            <div className='container'>
                <img 
                src="pencil-edit-button.svg"
                alt="edit button"
                onClick={() => props.setShowEdit(true)}
                width="25px"
                />
            </div>
        </div>
    );
}

export default Task;