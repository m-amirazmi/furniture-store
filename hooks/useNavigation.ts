import { useEffect, useState } from "react";
import routes from "data/routes.json";
import { IRoute } from "utils/interfaces";
import { useRouter } from "next/router";

export const useNavigation = () => {
	const [allRoutes, setAllRoutes] = useState<IRoute[]>([]);

	useEffect(() => {
		setAllRoutes(routes);
	}, []);

	return { routes: allRoutes };
};

export const useRouteChange = () => {
	const [pageLoading, setPageLoading] = useState<number>(0);

	const { events } = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: string, shallow: any, loading: string) => {
			if (loading === "start") setPageLoading(0.5);
			setPageLoading(1);
		};

		events.on("routeChangeStart", (url, { shallow }) => handleRouteChange(url, shallow, "start"));
		events.on("routeChangeComplete", (url, { shallow }) => handleRouteChange(url, shallow, "end"));

		return () => {
			events.off("routeChangeStart", (url, { shallow }) => handleRouteChange(url, shallow, "start"));
			events.on("routeChangeComplete", (url, { shallow }) => handleRouteChange(url, shallow, "end"));
		};
	}, [events]);

	return { pageLoading };
};
