import { NextPage } from "next";
import Hero from "components/home/hero";
import Promises from "components/home/promises";
import CollectionBanner from "components/home/collectionbanner";

const Home: NextPage = () => {
	return (
		<>
			<Hero />
			<Promises />
			<CollectionBanner />
		</>
	);
};

export default Home;
