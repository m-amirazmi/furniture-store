import { useCountry } from "hooks/useCountry";
import { IStoreFrontProps } from "utils/interfaces";
import { AnnouncementBar } from "../announcement-bar";
import { Header } from "../header";

export const StoreFrontLayout: React.FC<IStoreFrontProps> = ({ countryCode }) => {
	useCountry(countryCode);
	return (
		<>
			<AnnouncementBar />
			<Header />
		</>
	);
};
