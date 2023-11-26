function Task(props){
	const {element, index} = props;
	return (
		<div id="task-item">
			<label id="item" key = {index}>{index} <b>{element}</b></label>
			<label> delete</label>
		</div>
	)
}

export default Task