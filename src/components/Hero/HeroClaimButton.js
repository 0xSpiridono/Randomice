export default function HeroClaimButton({ claimRandomice }) {
	return (
		<button
			className="px-4 py-2 mt-2 mb-6 text-center text-4xl text-white uppercase bg-purple-600 rounded font-flower hover:bg-pink-400 hover:border-pink-500"
			onClick={claimRandomice}
		>
			{"CLAIM ONE FOR FREE!"}
		</button>
	);
}
