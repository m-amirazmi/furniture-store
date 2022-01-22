import { NextPage } from "next";
import Hero from "components/home/hero";
import Promises from "components/home/promises";
import CollectionBanner from "components/home/collectionbanner";
import FeaturedProducts from "components/home/featuredproducts";

const Home: NextPage = () => {
	return (
		<>
			<Hero />
			<Promises />
			<CollectionBanner />
			<FeaturedProducts />
		</>
	);
};

export default Home;
