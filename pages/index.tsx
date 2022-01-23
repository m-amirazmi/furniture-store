import { NextPage } from "next";
import Hero from "components/home/hero";
import Promises from "components/home/promises";
import CollectionBanner from "components/home/collectionbanner";
import FeaturedProducts from "components/home/featuredproducts";
import FeaturedCollections from "components/home/featuredcollections";
import VideoBanner from "components/home/videobanner";
import CustomerReview from "components/home/customerreview";
import Banner from "components/home/banner";
import Blogs from "components/home/blogs";

const Home: NextPage = () => {
	return (
		<>
			<Hero />
			<Promises />
			<CollectionBanner />
			<FeaturedProducts />
			<FeaturedCollections />
			<VideoBanner />
			<CustomerReview />
			<Banner />
			<Blogs />
		</>
	);
};

export default Home;
