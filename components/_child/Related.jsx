import Image from "next/image";
import Link from "next/link";
import Author from "../../components/_child/Author";

const Related = () => {
	return (
		<section className="pt-20">
			<h1 className="uppercase text-3xl font-humane tracking-widest text-[#0077b6] font-bold  text-center  py-10 underline">
				Related
			</h1>

			<div className="flex flex-col gap-10">
				{Post()}
				{Post()}
				{Post()}
			</div>
		</section>
	);
};

export default Related;

function Post() {
	return (
		<div className="flex gap-5">
			<div className="image flex flex-col justify-start">
				<Link href="/">
					<a >
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
							Spirituality
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
				<Author/>
			</div>
		</div>
	);
}
