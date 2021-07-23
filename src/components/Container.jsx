import React, { useState, useEffect } from "react";
import { ButtonsContainer } from "./ButtonsContainer";
import { Input } from "./Input";
import { TotalsContainer } from "./TotalsContainer";

const initialStateTotals = { tipAmount: "0.00", totalAmount: "0.00" };
const inititalStateInputs = {
	bill: "",
	people: "",
	tip: "",
	customTip: "",
};
const initialStateError = {
	billError: "",
	peopleError: "",
	tipError: "",
};

export const Container = () => {
	const [inputsState, setInputsState] = useState(inititalStateInputs);
	const [totals, setTotals] = useState(initialStateTotals);
	const [error, setError] = useState(initialStateError);

	useEffect(() => {
		calculateTips();
	}, [inputsState]);

	// Input state

	const handleBillChange = (value) => {
		setInputsState({ ...inputsState, bill: value });
	};
	const handlePeopleChange = (value) => {
		setInputsState({ ...inputsState, people: value });
	};

	const handleTipChange = (value) => {
		setInputsState({ ...inputsState, tip: value, customTip: "" });
	};
	const handleCustomTipChange = (value) => {
		setInputsState({ ...inputsState, customTip: value, tip: "" });
	};

	//Reset

	const reset = () => {
		setInputsState(inititalStateInputs);
		setTotals(initialStateTotals);
	};

	const { bill, people, tip, customTip } = inputsState;
	const { billError, peopleError, tipError } = error;

	// Total state

	const calculateTips = () => {
		const billNum = parseFloat(bill);
		const peopleNum = parseFloat(people);
		const tipNum = parseFloat(tip) / 100;
		const customTipNum = parseFloat(customTip) / 100;

		if (billNum <= 0) {
			return setError({ ...error, billError: "Can´t be zero or less" });
		} else if (peopleNum <= 0) {
			return setError({ ...error, peopleError: "Can´t be zero or less" });
		} else if (customTipNum < 0) {
			return setError({
				...error,
				tipError: "Can´t less than zero",
			});
		} else {
			const calcTips =
				tipNum > 0
					? (billNum * tipNum) / peopleNum
					: (billNum * customTipNum) / peopleNum;

			const calcTotals = billNum / peopleNum + calcTips;

			const calcTipsFixed = calcTips.toFixed(2);
			const calcTotalsFixed = calcTotals.toFixed(2);
			setError(initialStateError);
			return setTotals({
				tipAmount: calcTipsFixed,
				totalAmount: calcTotalsFixed,
			});
		}
	};
	return (
		<div className='container'>
			<div className='title'>
				<h2>
					SPLI <br />
					TTER
				</h2>
			</div>
			<div className='calc__container'>
				<div className='select__section'>
					<Input
						title='Bill'
						handleChange={handleBillChange}
						value={bill}
						error={billError}
					/>
					<ButtonsContainer
						handleChange={handleTipChange}
						tip={tip}
						handleCustomTipChange={handleCustomTipChange}
						customTip={customTip}
						error={tipError}
					/>
					<Input
						title='Number of People'
						handleChange={handlePeopleChange}
						value={people}
						error={peopleError}
					/>
				</div>
				<div className='totals__section'>
					<TotalsContainer {...totals} reset={reset} />
				</div>
			</div>
			<footer></footer>
		</div>
	);
};
