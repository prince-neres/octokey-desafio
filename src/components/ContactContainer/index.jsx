import { useState } from "react";

export default function Form () {
	const [formData, setFormData] = useState({
		name: "",
		message: "",
		file: {}
	});

	const sendMessage = (event) => {
		event.preventDefault();
		console.log(formData);
	};

	return (
		<form onSubmit={sendMessage} className="flex flex-col">
			<label htmlFor="name">Nome</label>
			<input
				id="name"
				type={"text"}
				placeholder="Fulano"
				value={formData.name}
				onChange={(e)=>setFormData(
					{
						...formData,
						name: e.target.value
					}
				)}/>
			<label htmlFor="message">Mensagem</label>
			<textarea
				id="message"
				placeholder="..."
				value={formData.message}
				onChange={(e) => setFormData(
					{
						...formData,
						message: e.target.value
					}
				)}/>
			<label>Arquivo:</label>
			<input 
				type="file"
				onChange={(e) => setFormData(
					{
						...formData,
						file: e.target.files[0]
					}
				)} accept="application/pdf/audio/*/video/*/image/*" />
			<button type="submit">Enviar</button>
		</form>
	)
};
