import React, { useEffect, useState } from 'react'

const URLBASE = "https://assets.breatheco.de/apis/fake/todos/user/victorpantin"

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


	const getTask = async () => {
		try{
			let response = await fetch(`${URLBASE}`)
			let data = await response.json()

			if(response.ok){
				setAllTasks(data)
			}else{
				console.log("error al consultar")
			}

		}catch(err){
			console.log(err)
		}

	}

	useEffect(() => {
		getTask()
	}, [])

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
							    return (<p onClick={() =>handleDeleteTask(index)} key={index}>{item.label}</p>)
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
