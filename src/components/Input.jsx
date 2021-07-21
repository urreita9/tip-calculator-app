import React from "react";

export const Input = ({ title, handleChange, value }) => {
	return (
		<div className='input__container w-90'>
			<label className='input__label'>{title}</label>
			<input
				placeholder='0'
				className='input'
				type='number'
				value={value ? value : ""}
				onChange={(e) => handleChange(e.target.value)}
			></input>
		</div>
	);
};
