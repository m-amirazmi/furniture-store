import { useState } from "react";
import { countries } from "data/countries";
import { ICountry } from "utils/interfaces";
import { TopSetting } from "./topsetting";
import Navbar from "./navbar";

export const Header: React.FC = () => {
	const [country, setCountry] = useState<string>("1");

	const findCountry: ICountry | undefined = countries.find((c) => c.id === country);

	return (
		<>
			<TopSetting country={findCountry} setCountry={setCountry} />
			<Navbar />
		</>
	);
};
