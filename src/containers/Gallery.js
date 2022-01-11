import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

import { PrevButton, NextButton } from "../components/EmblaCarouselButtons";


import media1 from "/public/images/1.png";
import media2 from "/public/images/15.png";
import media3 from "/public/images/19.png";
import media4 from "/public/images/13.png";
import media5 from "/public/images/5.png";
import media6 from "/public/images/6.png";
import media7 from "/public/images/7.png";
import media8 from "/public/images/8.png";
import media9 from "/public/images/9.png";
import media10 from "/public/images/10.png";
import media11 from "/public/images/11.png";
import media12 from "/public/images/12.png";
import media13 from "/public/images/4.png";
import media14 from "/public/images/14.png";
import media15 from "/public/images/2.png";
import media16 from "/public/images/16.png";
import media17 from "/public/images/17.png";
import media18 from "/public/images/18.png";
import media19 from "/public/images/3.png";
import media20 from "/public/images/20.png";

const media = [
	media1,
	media2,
	media3,
	media4,
	media5,
	media6,
	media7,
	media8,
	media9,
	media10,
	media11,
	media12,
	media13,
	media14,
	media15,
	media16,
	media17,
	media18,
	media19,
	media20
];
const mediaByIndex = index => media[index % media.length];

const SLIDE_COUNT = 20/*media.length*/;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Gallery() {
	const [viewportRef, embla] = useEmblaCarousel({
		containScroll: "trimSnaps",
		loop: false,
		dragFree: true,
		skipSnaps: false,
		slidesToScroll: 2
	});

	const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
	const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
	const [scrollProgress, setScrollProgress] = useState(0);

	const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
	const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

	const onSelect = useCallback(() => {
		if (!embla) return;
		setPrevBtnEnabled(embla.canScrollPrev());
		setNextBtnEnabled(embla.canScrollNext());
	}, [embla]);

	const onScroll = useCallback(() => {
		if (!embla) return;
		const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
		setScrollProgress(progress * 100);
	}, [embla, setScrollProgress]);

	useEffect(() => {
		if (!embla) return;
		onSelect();
		onScroll();
		embla.on("select", onSelect);
		embla.on("scroll", onScroll);
	}, [embla, onSelect, onScroll]);

	return (
		<div id="gallery" className="py-10 bg-secondary">
			<div className="container  mx-auto">
				<h2 className="mb-10 text-2xl font-bold leading-10 text-center text-white font-flower text-6xl lg:text-7xl">
					SNEAK PEEK
				</h2>
				<div className="embla">
					<div className="embla__viewport" ref={viewportRef}>
						<div className="embla__container">
							{slides.map((index) => (
								<div className="embla__slide" key={index}>
									<div className="embla__slide__inner">
										<Image
											className="embla__slide__img"
											layout="fill"
											src={mediaByIndex(index)}
											alt={"NFT"}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
					<PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
					<NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
				</div>
				{ /*<div className="embla__progress">
					<div
						className="embla__progress__bar"
						style={{ transform: `translateX(${scrollProgress}%)` }}
					/>
					</div> */}
			</div>
		</div>
	);
}
