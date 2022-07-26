import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

const Related = () => {
	return (
		<section className="pt-20">
			<h1 className="uppercase text-3xl font-humane tracking-widest text-[#0077b6] font-bold  text-center  py-10 underline">
				Related
			</h1>

			<div className="flex flex-col gap-10"></div>
		</section>
	);
};

export default Related;

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
		</div>
	);
}
