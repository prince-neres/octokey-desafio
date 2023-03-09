import { useEffect, useState } from "react";
import Inputs from "./Inputs";

export default function SearchCEPContainer () {
	const [adress, setAdress] = useState({});
	const [cep, setCEP] = useState("");

	useEffect(() => {
		const fetchCEPs = async () => {
			const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
			const json = await response.json();
			setAdress(json);
		};
		cep.length === 8 && fetchCEPs();
	}, [cep]);

	return (
		<div className="shadow-lg bg-light-200 dark:bg-dark-200 pb-10 text-center rounded-xl m-auto flex flex-row flex-wrap lg:w-3/4 md:w-1/2">
			<label className="flex flex-col font-bold px-10 py-2 pt-8 m-auto">Digite o cep:
				<input
						className="text-center text-dark-200 focus:outline-none mt-2 rounded-lg p-2"
						type="number"
						name="cep"
						maxLength={8}
						value={cep} 
						onChange={(e) => setCEP(e.target.value)}
				/>
			</label>
			<Inputs adress={adress}/>
		</div>
	)
};
