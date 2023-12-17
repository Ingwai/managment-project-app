import React from 'react';
import Button from './Button';

const ProjectsSidebar = ({ onStartAddProject, projects, onSelectProject, selectedProjectId }) => {
	return (
		<aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 h-screen md:w-72 rounded-r-2xl'>
			<h2 className='mb-8 font-bold uppercase md:text-xl text-center text-stone-400'>Your projects</h2>
			<div>
				<Button onClick={onStartAddProject}>+ Add Project</Button>
			</div>
			<ul className='mt-8'>
				{projects.map(project => {
					let cssClasses =
						'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-300 hover:bg-stone-800 duration-300';

					if (project.id === selectedProjectId) {
						cssClasses += ' bg-stone-800 text-stone-200';
					} else {
						cssClasses += ' text-stone-400';
					}

					const { title, id } = project;
					return (
						<li key={id}>
							<button className={cssClasses} onClick={() => onSelectProject(project.id)}>
								{title}
							</button>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};

export default ProjectsSidebar;
