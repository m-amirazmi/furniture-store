import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { API_URL } from "utils/configs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === "GET") {
		const url = `${API_URL}/products`;
		const { data } = await axios.get(url);
		return res.status(200).json(data);
	}
}
