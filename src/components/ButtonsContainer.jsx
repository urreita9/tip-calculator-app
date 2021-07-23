import React from "react";

export const ButtonsContainer = ({
	handleChange,
	handleCustomTipChange,
	customTip,
	error,
}) => {
	const percentages = [5, 10, 15, 25, 50];
	return (
		<div className='buttons__section w-90'>
			<div className='label__container'>
				<span className='buttons__title'>Select Tip %</span>
				{error ? <span className='buttons__error'>{error}</span> : null}
			</div>

			<div className='buttons__container'>
				{percentages.map((percentage, i) => {
					return (
						<button
							className='button'
							key={i}
							onClick={() => handleChange(percentage)}
						>
							{percentage}%
						</button>
					);
				})}

				<input
					type='number'
					className={`buttons__input ${error ? "errorFocus" : "focus"}`}
					placeholder='Custom'
					value={customTip}
					onChange={(e) => handleCustomTipChange(e.target.value)}
				></input>
			</div>
		</div>
	);
};
