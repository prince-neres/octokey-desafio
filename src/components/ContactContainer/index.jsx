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
		<form onSubmit={sendMessage} className="shadow-lg flex flex-col bg-light-200 dark:bg-dark-200 text-center rounded-xl m-auto xl:w-1/3 lg:w-1/2 md:w-3/4 p-10">
			<label
				className="font-bold"
				htmlFor="name"
			>
				Nome
			</label>
			<input
			  className="text-dark-200 text-center mt-2 focus:outline-none rounded-lg p-2"
				id="name"
				type={"text"}
				value={formData.name}
				onChange={(e)=>setFormData(
					{
						...formData,
						name: e.target.value
					}
				)}/>
			<label
				className="font-bold mt-3"
				htmlFor="message"
			>
				Mensagem
			</label>
			<textarea
			  className="text-dark-200 mt-2 focus:outline-none rounded-lg p-2"
				id="message"
				value={formData.message}
				onChange={(e) => setFormData(
					{
						...formData,
						message: e.target.value
					}
				)}/>
			<label className="font-bold mt-3" htmlFor="file">
				Arquivo:
			</label>
			<input
				id="file"
				className="border border-gray-300 rounded-lg cursor-pointer focus:outline-none my-4"
				type="file"
				onChange={(e) => setFormData(
					{
						...formData,
						file: e.target.files[0]
					}
				)} accept="application/pdf/audio/*/video/*/image/*" />
			<button
				className="text-light-100 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full px-5 py-2.5 mt-5 text-center"
				type="submit"
			>
				Enviar
			</button>
		</form>
	)
};
