import { decodeURI } from "../../../utils/decodeTokenURI";
import { getURI } from "../../../utils/interact";

export default async function fetchMetadata(req, res) {
	let { tokenId } = req.query;
	tokenId = Number(tokenId);

	try {
		const URI = decodeURI(await getURI(tokenId));
		res.json(URI);
	} catch (error) {
		console.log("api/metadata: ", error.message);
		res.status(401).json({ error: "token not found" });
	}
}
