export function decodeURI(URI) {
	return JSON.parse(Buffer.from(URI.split(",")[1], "base64").toString());
}

export function decodeImage(URI) {
	return Buffer.from(decodeURI(URI).image.split(",")[1], "base64");
}
