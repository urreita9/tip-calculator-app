import React from "react";

export const Total = ({ total, totalText }) => {
	function checkIsNan(total) {
		return isNaN(total);
	}
	return (
		<div className='total w-90'>
			<div className='total__text'>
				<p>{totalText}</p>
				<span className='total__text__subtitle'>/ person</span>
			</div>

			<span className='total__number'>
				{checkIsNan(total) ? "0.00" : `$${total}`}
			</span>
		</div>
	);
};
