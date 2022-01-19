import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { data } = await axios.get("https://geolocation-db.com/json/");
	return res.status(200).json({ data });
}
