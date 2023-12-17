import React, { useState } from 'react';
import Button from './Button';

const NewTask = ({ onAddTask }) => {
	const [enteredTask, setEnteredTask] = useState('');

	const handleChange = e => {
		setEnteredTask(e.target.value);
		e.target.value = '';
	};

	const handleClick = () => {
		if (enteredTask.trim() === '') return;
		setEnteredTask('');
		onAddTask(enteredTask);
	};

	return (
		<div className='flex items-center gap-4'>
			<input
				className='w-64 h-10 px-2 py-1 rounded-md bg-stone-200'
				type='text'
				value={enteredTask}
				onChange={handleChange}
			/>
			<Button onClick={handleClick}>Add Task</Button>
		</div>
	);
};

export default NewTask;
