import React, { useState, useEffect } from "react";
import { ButtonsContainer } from "./ButtonsContainer";
import { Input } from "./Input";
import { TotalsContainer } from "./TotalsContainer";

const initialStateTotals = { tipAmount: 0, totalAmount: 0 };
export const Container = () => {
	const [bill, setBill] = useState("");
	const [people, setPeople] = useState("");
	const [tip, setTip] = useState("");
	const [customTip, setCustomTip] = useState("");
	const [totals, setTotals] = useState(initialStateTotals);

	useEffect(() => {
		calculateTips();
	}, [bill, people, tip, customTip]);
	const handleBillChange = (value) => {
		setBill(value);
	};
	const handlePeopleChange = (value) => {
		setPeople(value);
	};

	const handleTipChange = (value) => {
		setTip(value);
		setCustomTip("");
	};
	const handleCustomTipChange = (value) => {
		setCustomTip(value);
		setTip("");
	};
	const calculateTips = () => {
		const billNum = parseFloat(bill);
		const peopleNum = parseFloat(people);
		const tipNum = parseFloat(tip) / 100;
		const customTipNum = parseFloat(customTip) / 100;
		if (billNum <= 0 || (tipNum || customTipNum) <= 0 || peopleNum <= 0) {
			return setTotals(initialStateTotals);
		} else {
			const calcTips =
				tipNum > 0
					? (billNum * tipNum) / peopleNum
					: (billNum * customTipNum) / peopleNum;
			const calcTotals = billNum / peopleNum + calcTips;
			const calcTipsFixed = calcTips.toFixed(2);
			const calcTotalsFixed = calcTotals.toFixed(2);
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
					<Input title='Bill' handleChange={handleBillChange} value={bill} />
					<ButtonsContainer
						handleChange={handleTipChange}
						tip={tip}
						handleCustomTipChange={handleCustomTipChange}
						customTip={customTip}
					/>
					<Input
						title='Number of People'
						handleChange={handlePeopleChange}
						value={people}
					/>
				</div>
				<div className='totals__section'>
					<TotalsContainer {...totals} />
				</div>
			</div>
		</div>
	);
};
