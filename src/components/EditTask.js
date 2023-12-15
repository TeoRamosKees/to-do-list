

function EditTask(props){
    return(
        <div>
            <input value={props.getTaskText()} onChange={e => props.setTaskText(e.target.value)}/>
            <button onClick={() => props.handleEditTask()}>Save</button>
            <button onClick={() => props.handleCancelEdit()}>Cancel</button>
        </div>
    )
}

export default EditTask;