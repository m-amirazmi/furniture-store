import axios from "axios";
import { useCountry } from "hooks/useCountry";
import { useEffect } from "react";
import { AnnouncementBar } from "../announcement-bar";
import { Header } from "../header";

export const StoreFrontLayout: React.FC = ({ children }) => {
	useCountry();

	return (
		<>
			<AnnouncementBar />
			<Header />
			{children}
		</>
	);
};
