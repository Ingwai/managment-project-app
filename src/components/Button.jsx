import React from 'react';

const Button = ({ children, ...props }) => {
	return (
		<button
			className='bg-stone-700 px-4 py-2 text-xs md:text-base rounded-md text-stone-400 hover:bg-stone-600 hover:text-stone-100 duration-300'
			{...props}>
			{children}
		</button>
	);
};

export default Button;
