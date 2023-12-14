

function EditTask(props){
    return(
        <div>
            <input value={props.getTaskText(props.index)} onChange={e => props.setTaskText(e.target.value)}/>
            <button onClick={() => props.handleEditTask()}>save</button>
        </div>
    )
}

export default EditTask;