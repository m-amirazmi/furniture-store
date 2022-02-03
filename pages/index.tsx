import { GetServerSideProps, NextPage } from "next";
import Hero from "components/home/hero";
import Promises from "components/home/promises";
import CollectionBanner from "components/home/collectionbanner";
import FeaturedProducts from "components/home/featuredproducts";
import FeaturedCollections from "components/home/featuredcollections";
import VideoBanner from "components/home/videobanner";
import CustomerReview from "components/home/customerreview";
import Banner from "components/home/banner";
import Blogs from "components/home/blogs";
import axios from "axios";
import { APP_URL } from "utils/configs";
import { ICollection, IGetFeatured, IHomeProps, IProduct } from "utils/interfaces";

const Home: NextPage<IHomeProps> = ({ featuredCollections, featuredProducts }) => {
	return (
		<>
			<Hero />
			<Promises />
			<CollectionBanner />
			<FeaturedProducts products={featuredProducts} />
			<FeaturedCollections collections={featuredCollections} />
			<VideoBanner />
			<CustomerReview />
			{/* <Banner /> */}
			{/* <Blogs /> */}
		</>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const featuredCollections = await getFeaturedCollections();
	const featuredProducts = await getFeaturedProducts();

	return {
		props: {
			featuredProducts,
			featuredCollections,
		},
	};
};

const getFeatured = ({ data, count }: IGetFeatured) => {
	return data
		.sort((a, b) => {
			if (a.createdAt < b.createdAt) return 1;
			else return -1;
		})
		.filter((p) => p.isFeatured)
		.slice(0, count);
};

const getFeaturedProducts = async () => {
	const { data } = await axios.get(`${APP_URL}/api/products`);
	return getFeatured({ data, count: 8 });
};

const getFeaturedCollections = async () => {
	const { data } = await axios.get(`${APP_URL}/api/categories`);
	return getFeatured({ data, count: 3 });
};
