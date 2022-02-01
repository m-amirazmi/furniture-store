/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["via.placeholder.com", "furnistore.s3.ap-southeast-1.amazonaws.com"],
	},
};

module.exports = nextConfig;
