// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Author from "./_child/Author";
import Image from "next/image";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import Fetcher from "../lib/fetcher";
//import spinner from "./_child/spinner";
//import error from "./_child/error";

const MostPopular = () => {
	//SwiperCore.use([Autoplay])
	const { data, isLoading, isError } = Fetcher("api/popular");
	if (isLoading) return <spinner></spinner>;
	if (isError) return <error />;
	return (
		<section className="container mx-auto md:px-20 md:py-16 px-4 sm:mb-0 sm:bottom-0 sm:py-0 sm:my-0">
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
				{data &&
					data.map((value, id) => (
						<SwiperSlide key={id}>
							<Posts data={value} />
						</SwiperSlide>
					))}
				
			</Swiper>
		</section>
	);
};

export default MostPopular;


function Posts({ data }) {
	const { title, category, img, published, author, description } = data;
	return (
		<div className="grid ">
			<div className="images">
				<Link href="/">
					<a>
						<Image
							src={img || "/"}
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
							{category || "unknown"}
						</a>
					</Link>
				</div>

				<div className="title sm:p-4">
					<Link href="/">
						<a className="text-slate-500 hover:text-[#5d9bbc] text-2xl md:text-4xl  font-bold ">
							{title || "Title"}
						</a>
					</Link>

					<Link href="/">
						<a className="text-slate-400 hover:text-[#5d9bbc] ml-2">
							-{published || "unknown"}
						</a>
					</Link>
				</div>

				<div className="text-gray-500  py-3 ">
					<p className="p-4 text-xs  md:text-sm ">
						{description || Description}.
					</p>
				</div>
				{author ? <Author /> : <></>}
			</div>
		</div>
	);
}

