import { AnnouncementBar } from "../announcement-bar";
import { Header } from "../header";

export const StoreFrontLayout: React.FC = ({ children }) => {
	return (
		<>
			<AnnouncementBar />
			<Header />
		</>
	);
};
