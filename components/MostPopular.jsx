// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Author from "./_child/Author";
import Image from "next/image";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";

const MostPopular = () => {
	//SwiperCore.use([Autoplay])
	return (
		<section className="container mx-auto md:px-20 py-16 px-4">
			<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold pb-12 text-center underline">
				Most Popular
			</h1>
			{/*swiper*/}
			<Swiper
				spaceBetween={50}
				slidesPerView={2}
				loop={true}
				autoplay={{
					delay: 2000,
				}}>
				<SwiperSlide>{Posts()}</SwiperSlide>
				<SwiperSlide>{Posts()}</SwiperSlide>
				<SwiperSlide>{Posts()}</SwiperSlide>
				<SwiperSlide>{Posts()}</SwiperSlide>
				<SwiperSlide>{Posts()}</SwiperSlide>
				<SwiperSlide>{Posts()}</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default MostPopular;


function Posts() {
	return (
		<div className="grid ">
			<div className="images">
				<Link href="/">
					<a>
						<Image
							
							src="/images/fruits/pineaple.jpg
                            "
							width="400px"
							height="350px"
							alt="nemaste"
						/>
					</a>
				</Link>
			</div>

			<div className="info flex flex-col justify-center py-4">
				<div className="cat">
					<Link href="/">
						<a className="text-[#669bbc] hover:text-[#0077b6] text-2xl font-bold leading-10 uppercase font-humane tracking-widest">
							Coding
						</a>
					</Link>
				</div>

				<div className="title">
					<Link href="/">
						<a className="text-slate-500 hover:text-[#5d9bbc] text-3xl md:text-4xl  font-bold">
							Learning To Code
						</a>
					</Link>

					<Link href="/">
						<a className="text-slate-400 hover:text-[#5d9bbc] ml-2">
							-25 July 2022
						</a>
					</Link>
				</div>

				<div className="text-gray-500  py-3 ">
					<p className="p-4 text-xs  md:text-sm ">
						It doesn’t interest me if the story you’re telling me is true. I
						want to know if you can disappoint another to be true to yourself.
					</p>
				</div>
				<Author />
			</div>
		</div>
	);
}

