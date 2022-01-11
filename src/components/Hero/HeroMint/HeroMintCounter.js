export default function HeroMintCounter({
	count,
	incrementCount,
	decrementCount,
}) {
	return (
		<div className="flex items-center px-8 ">
			<button
				className="flex items-center justify-center w-12 h-12 text-center bg-purple-200 rounded-md hover:bg-purple-600"
				onClick={decrementCount}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6 text-black"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="5"
						d="M20 12H4"
					/>
				</svg>
			</button>
			<h2 className="mx-8 lg:text-4xl font-extrabold text-center text-purple-600 font-flower">
				{count}
			</h2>
			<button
				className="flex items-center justify-center w-12 h-12 text-center text-black bg-purple-200 rounded-md hover:bg-purple-600"
				onClick={incrementCount}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6 text-black"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="5"
						d="M12 4v16m8-8H4"
					/>
				</svg>
			</button>
		</div>
	);
}
