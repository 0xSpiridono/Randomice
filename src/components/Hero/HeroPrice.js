export default function HeroPrice({ nftPrice }) {
	return (
		<h4 className="mt-2 text-2xl font-semibold text-center text-black font-flower">
			{nftPrice} ETH
			<span className="text-2xl text-black font-flower"> + gas</span>
		</h4>
	);
}
