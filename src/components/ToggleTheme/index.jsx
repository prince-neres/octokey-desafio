import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function ToggleTheme () {
	const toogle = () => {
		document.documentElement.classList.toggle("dark");
	};

	return (
			<div className="h-14 text-gray-100 hidden sm:block cursor-pointer">
				<MoonIcon className="h-14 text-gray-100 block dark:hidden" onClick={toogle} />
				<SunIcon className="h-14 text-gray-100 hidden dark:block" onClick={toogle} />
			</div>
		)
};
