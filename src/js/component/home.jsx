import React, { useState } from 'react'

const Home = () => {
	
	const [allTasks, setAllTasks] = useState([])

	const [task,setTask] = useState("")

    const handleChange = (event) => {

        setTask(event.target.value)
    }

	const handleSubmit = (event) => {
		event.preventDefault()
	}

	const handleAddTask = (event) => {
		if (event.key == "Enter") {
			setAllTasks([...allTasks,task])
			setTask("")
		}
    }

	const handleDeleteTask = (id) => {
		const newTask = allTasks.filter((_,index)=> index != id)
		setAllTasks(newTask)
	}

	return (
		<>
            <div className='container'>
				<div className='row'>
					<div className='col-12 col-md-7'>
						<h2>TODOS</h2>
						<form onKeyDown={handleAddTask} onSubmit={handleSubmit}>
							<input value={task} type='text' placeholder='ingrese tarea' className='form-control' name='task' onChange={handleChange}/>
						</form>
						{
							allTasks.map((item, index) => {
								return (<p onClick={() =>handleDeleteTask(index)} key={index}>{item} </p>)
							})
						}
					</div>
				</div>
			</div>
		</>
	)
};

export default Home;
