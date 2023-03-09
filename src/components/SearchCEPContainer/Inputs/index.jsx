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
		<label className="flex flex-col font-bold px-10 py-2">Endereço/Rua:
			<input
			  className="text-center text-dark-200"
				value={logradouro || ""}
				readOnly
			/>
		</label>
		<label className="flex flex-col font-bold px-10 py-2">Complemento:
			<input
			  className="text-center text-dark-200"
			  value={complemento || ""}
				readOnly
			/>
		</label>
		<label className="flex flex-col font-bold px-10 py-2">Bairro:
			<input
			  className="text-center text-dark-200"
			  value={bairro || ""}
				readOnly
			/>
		</label>
		<label className="flex flex-col font-bold px-10 py-2">Cidade:
			<input
			  className="text-center text-dark-200"
				value={localidade || ""}
				readOnly
			/>
		</label>
		<label className="flex flex-col font-bold px-10 py-2">UF:
			<input
			  className="text-center text-dark-200"
				value={uf || ""}
				readOnly
			/>
		</label>
		<label className="flex flex-col font-bold px-10 py-2">IBGE:
			<input
			  className="text-center text-dark-200"
				value={ibge || ""}
				readOnly
			/>
		</label> 
		<label className="flex flex-col font-bold px-10 py-2">Gia:
			<input
			  className="text-center text-dark-200"
				value={gia || ""}
				readOnly
			/>
		</label> 
		<label className="flex flex-col font-bold px-10 py-2">DDD:
			<input
			  className="text-center text-dark-200"
				value={ddd || ""}
				readOnly/>
		</label>
		<label className="flex flex-col font-bold px-10 py-2 pb-10">Siafi:
			<input
			  className="text-center text-dark-200"
				value={siafi || ""}
				readOnly
			/>
		</label>
		</>
	)
};
