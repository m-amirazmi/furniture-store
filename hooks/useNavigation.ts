import { useEffect, useState } from "react";
import routes from "data/routes.json";
import { IRoute } from "utils/interfaces";

export const useNavigation = () => {
	const [allRoutes, setAllRoutes] = useState<IRoute[]>([]);

	useEffect(() => {
		setAllRoutes(routes);
	}, []);

	return { routes: allRoutes };
};
