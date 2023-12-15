

function Task(props){
    return (
        <div className='container'>
            <label className="checkbox-container" style={{ textDecoration: props.task.completed ? 'line-through' : 'none' }}>
                <input 
                    type="checkbox" 
                    checked={props.task.completed} 
                    onChange={() => props.toggleCompleted(props.index)}
                />
                <div className="checkbox-track">
                    <div className="checkbox-thumb"></div>
                </div>
                {props.task.text}
            </label>
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
                onClick={() => props.setEditWithIndex(props.index)}
                width="25px"
                />
            </div>
        </div>
    );
}

export default Task;