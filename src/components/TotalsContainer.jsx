import React from "react";
import { Total } from "./Total";

export const TotalsContainer = ({ tipAmount, totalAmount }) => {
	return (
		<div className='totals__container'>
			<Total total={tipAmount} totalText='Tip Amount' />
			<Total total={totalAmount} totalText='Total' />
			<button className='reset'>RESET</button>
		</div>
	);
};
