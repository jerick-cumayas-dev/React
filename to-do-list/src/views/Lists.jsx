import Task from './Task.jsx'

function Lists(props){
	const list = props.data
	return (
		<div class="lists-container">
			{
				list.map((task, index) => (
					<Task element = {task} index = {index} />
				))
			}
		</div>
	)
}

export default Lists
