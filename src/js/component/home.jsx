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
						<h1>ToDos</h1>
			            <div className='contenedor'>
							<form onKeyDown={handleAddTask} onSubmit={handleSubmit}>
						        <input value={task} 
								       type='text' 
									   placeholder='What needs to be done?' 
									   className='input form-control' 
									   name='task' 
									   onChange={handleChange}/>
					        </form>
							{
							    allTasks.map((item, index) => {
							    return (<p onClick={() =>handleDeleteTask(index)} key={index}>{item}</p>)
							    })
					        }
							<div className='task'>{allTasks.length} item left</div>
				        </div>
					</div>
				</div>
			</div>
		</>
	)
};

export default Home;
