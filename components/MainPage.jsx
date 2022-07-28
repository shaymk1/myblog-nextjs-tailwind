import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from "swiper"
// Import Swiper styles
import 'swiper/css';
import Fetcher from "../lib/fetcher";
//import spinner from "./_child/spinner";
//import error from "./_child/error";

const MainPage = () => {
	//SwiperCore.use([Autoplay])
	const bg = {
		background: "url('/images/banner.png') no-repeat",
		backgroundPosition: "right",
		
	};

	const { data, isLoading, isError } = Fetcher("api/trending");
	if (isLoading) return <spinner></spinner>;
	if (isError) return <error />;
	return (
		<>
			<section className="py-16  px-4" style={bg}>
				<div className="container mx-auto md:px-20">
					<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold  text-center underline py-12">
						Trending
					</h1>
					<Swiper
						slidesPerView={1}
						loop={true}
						autoplay={{
							delay: 2000,
						}}>
						{data &&
							data.map((value, id) => (
								<SwiperSlide key={id}>
									<Slide data={value} />
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default MainPage;

function Slide({ data }) {
	
	const {title,  category, img, published, author, description} = data;
	
	return (
		<div className="grid md:grid-cols-2">
			<div className="image">
				<Link href="/">
					<a>
						<Image
							className="rounded"
							src={img || "/"}
							width="600px"
							height="600px"
							alt="nemaste"
						/>
					</a>
				</Link>
			</div>
			<div className="info flex justify-center flex-col ml-3">
				<div className="cat">
					<Link href="/">
						<a className="text-[#669bbc] hover:text-[#0077b6] text-2xl font-bold leading-10 uppercase font-humane tracking-widest">
							{category || "unknown"}
						</a>
					</Link>
				</div>
				<div className="title">
					<Link href="/">
						<a className="text-slate-500 hover:text-[#5d9bbc] text-3xl md:text-6xl font-bold">
							{title || "Title"}
						</a>
					</Link>

					<Link href="/">
						<a className="text-slate-400 hover:text-[#5d9bbc] ml-2">
							-{published || "unknown"}
						</a>
					</Link>
				</div>

				<div className="text-gray-500 line-clamp-5 py-3 ">
					<p className="p-4 text-xs  md:text-sm ">
						{description || Description}
					</p>

					<p className="p-4 text-xs md:text-sm ">
						{description || Description}
					</p>

					<p className="p-4 text-xs md:text-sm">{description || Description}</p>

					<p className="p-4 text-xs md:text-sm mb-2">
						{description || Description} .
					</p>
				</div>
				<div className="mr-4 ml-3 text-center">
					<Link href="http://www.oriahmountaindreamer.com/">
						<a className="px-4 py-2 bg-[#1b96d9]  rounded-lg text-white text-center hover:bg-[#148ac9] mt-4 mb-2 ">
							Learn More
						</a>
					</Link>
				</div>

				{author ? <Author /> : <></>}
			</div>
		</div>
	);
}
