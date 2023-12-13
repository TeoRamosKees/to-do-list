

function AddTask(props){
    return(
        <label>
            <div className='container'>
                Task: <input className="input" value={props.task} onChange={e => props.setTask(e.target.value)}/>
            </div>
            <div className='container'>
                <button className="button" onClick={() => props.handleAddTask()}> 
                    Add
                </button>
            </div>
        </label>
    )
}

export default AddTask;