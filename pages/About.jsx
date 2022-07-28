import Image from "next/image";
import Link from "next/link";

const About = () => {
	const bg = {
		background: "url('/images/banner.png') no-repeat",
		backgroundPosition: "right",
	};
	return (
		<section className="py-16  px-4" style={bg}>
			<div className="container mx-auto md:px-20">
				<Link href="/">
					<a>
						<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold  text-center underline py-12">
							About Me
						</h1>
					</a>
				</Link>

				<div className="grid md:grid-cols-2">
					<div className="image">
						<Link href="/">
							<a>
								<Image
									className="rounded-md cursor-pointer"
									src="/images/author/myself-2.jpg"
									width="600px"
									height="600px"
									alt="nemaste"
								/>
							</a>
						</Link>
					</div>
					<div className="info flex justify-center flex-col ml-3">
						<div className="title">
							<Link href="">
								<a className="text-slate-500 hover:text-[#5d9bbc] text-3xl md:text-6xl font-bold cursor-pointer transition duration-150 ease-in-out uppercase">
									Welcome to my blog
								</a>
							</Link>
						</div>

						<div className="text-gray-600 line-clamp-5 py-3 ">
							<p className="p-4 text-xs  md:text-lg ">
								Where i talk about my spiritual journey, my coding journey , my
								art journey and all other journeys in between. It is all about
								the journeys right? Please come along...
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
