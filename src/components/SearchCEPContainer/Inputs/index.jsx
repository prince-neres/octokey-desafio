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
		<label className="flex flex-col font-bold px-10 py-2 pt-8 m-auto">Endereço/Rua:
			<input
			  className="text-center text-dark-200 focus:outline-none mt-2 rounded-lg p-2"
				value={logradouro || ""}
				readOnly
			/>
		</label>
		<label className="flex flex-col font-bold px-10 py-2 pt-8 m-auto">Complemento:
			<input
			  className="text-center text-dark-200 focus:outline-none mt-2 rounded-lg p-2"
			  value={complemento || ""}
				readOnly
			/>
		</label>
		<label className="flex flex-col font-bold px-10 py-2 pt-8 m-auto">Bairro:
			<input
			  className="text-center text-dark-200 focus:outline-none mt-2 rounded-lg p-2"
			  value={bairro || ""}
				readOnly
			/>
		</label>
		<label className="flex flex-col font-bold px-10 py-2 pt-8 m-auto">Cidade:
			<input
			  className="text-center text-dark-200 focus:outline-none mt-2 rounded-lg p-2"
				value={localidade || ""}
				readOnly
			/>
		</label>
		<label className="flex flex-col font-bold px-10 py-2 pt-8 m-auto">UF:
			<input
			  className="text-center text-dark-200 focus:outline-none mt-2 rounded-lg p-2"
				value={uf || ""}
				readOnly
			/>
		</label>
		<label className="flex flex-col font-bold px-10 py-2 pt-8 m-auto">IBGE:
			<input
			  className="text-center text-dark-200 focus:outline-none mt-2 rounded-lg p-2"
				value={ibge || ""}
				readOnly
			/>
		</label> 
		<label className="flex flex-col font-bold px-10 py-2 pt-8 m-auto">Gia:
			<input
			  className="text-center text-dark-200 focus:outline-none mt-2 rounded-lg p-2"
				value={gia || ""}
				readOnly
			/>
		</label> 
		<label className="flex flex-col font-bold px-10 py-2 pt-8 m-auto">DDD:
			<input
			  className="text-center text-dark-200 focus:outline-none mt-2 rounded-lg p-2"
				value={ddd || ""}
				readOnly/>
		</label>
		<label className="flex flex-col font-bold px-10 py-2 pt-8 m-auto">Siafi:
			<input
			  className="text-center text-dark-200 focus:outline-none mt-2 rounded-lg p-2"
				value={siafi || ""}
				readOnly
			/>
		</label>
		</>
	)
};
