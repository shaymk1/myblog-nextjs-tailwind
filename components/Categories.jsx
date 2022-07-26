import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

const Categories = () => {
	return (
		<section className="container mx-auto md:px-20 py-16 px-4">
			<div className="grid md:grid-cols-3 gap-8">
				<div className="item">
					<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold pb-12 underline">
						Spirituality
					</h1>
					<div className="flex flex-col gap-8">
						{/*posts*/}
						{Post()}
						{Post()}
						{Post()}
					</div>
				</div>

				<div className="item">
					<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold pb-12 underline">
						Coding
					</h1>

					<div className="flex flex-col gap-6">
						{/*posts*/}
						{Post()}
						{Post()}
						{Post()}
					</div>
				</div>

				<div className="item">
					<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold pb-12 underline">
						Art
					</h1>

					<div className="flex flex-col gap-6">
						{/*posts*/}
						{Post()}
						{Post()}
						{Post()}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Categories;

function Post() {
	return (
		<div className="flex gap-5">
			<div className="image flex flex-col justify-start">
				<Link href="/">
					<a>
						<Image
							src="/images/fruits/cherries.jpg
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
						<a className="text-slate-500 hover:text-[#5d9bbc] text-xl   font-bold">
							Learning To Code
						</a>
					</Link>

					<Link href="/">
						<a className="text-slate-400 hover:text-[#5d9bbc] ml-2">
							-25 July 2022
						</a>
					</Link>
				</div>

				
				<Author />
			</div>
		</div>
	);
}
