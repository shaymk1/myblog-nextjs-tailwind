import Image from "next/image";
import Link from "next/link";
//import Author from "./_child/Author";

const LatestPosts = () => {
	return (
		<section className="container mx-auto md:px-20 py-10">
			<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold pb-12 text-center underline">
				Latest Posts
			</h1>

			{/*grid columns*/}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">{Posts()}</div>
		</section>
	);
};

export default LatestPosts;

function Posts() {
	return (
		<div className="item">
			<div className="images">
				<Link href="/">
					<a>
						<Image
							className="rounded"
							src="/images/fruits/2-dragons.jpg
                            "
							width="500px"
							height="400px"
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
						<a className="text-slate-500 hover:text-[#5d9bbc] text-3xl md:text-6xl font-bold">
							Learning To Code
						</a>
					</Link>

					<Link href="/">
						<a className="text-slate-400 hover:text-[#5d9bbc] ml-2">
							-25 July 2022
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}
