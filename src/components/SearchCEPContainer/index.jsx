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
		<div>
			<label> Digite o cep:
				<input
						type="number"
						name="cep"
						maxLength={8}
						value={cep} 
						onChange={(e) => setCEP(e.target.value)}
				/>
			</label>
			<Inputs adress={adress} />
		</div>
	)
};
