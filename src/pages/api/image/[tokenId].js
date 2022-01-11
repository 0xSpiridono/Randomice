import { decodeURI } from "../../../utils/decodeTokenURI";
import { getURI } from "../../../utils/interact";

export default async function fetchMetadata(req, res) {
  let { tokenId } = req.query;
  tokenId = Number(tokenId);

  try {
    const URI = await getURI(tokenId);
    const { image } = decodeURI(URI);
    res.send(`<body><img src="${image}" /></body>`);
  } catch (error) {
    console.log("api/image: ", error.message);
    res.status(401).json({ error: "token not found" });
  }
}
