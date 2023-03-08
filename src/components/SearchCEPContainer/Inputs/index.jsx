export default function Inputs ({adress}) {
	const {	
		logradouro,
		complemento,
		bairro,
		localidade,
		uf,
		ibge,
		gia,
		ddd,
		siafi
	} = adress;

	return (
		<>
		<label>Endereço/Rua:</label>
			<input 
				value={logradouro || ""}
				readOnly
			/>
			<label>Complemento:</label>
			<input
			  value={complemento || ""}
				readOnly
			/>
			<label>Bairro:</label>
			<input
			  value={bairro || ""}
				readOnly
			/>
			<label>Cidade:</label>
			<input
				value={localidade || ""}
				readOnly
			/>
			<label>UF:</label>
			<input
				value={uf || ""}
				readOnly
			/>
			<label>IBGE:</label> 
			<input
				value={ibge || ""}
				readOnly
			/>
			<label>Gia:</label>
			<input
				value={gia || ""}
				readOnly
			/>
			<label>DDD:</label>
			<input 
				value={ddd || ""}
				readOnly/>
			<label>Siafi:</label>
			<input
				value={siafi || ""}
				readOnly
			/>
		</>
	)
};
