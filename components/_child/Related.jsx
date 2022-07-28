import Image from "next/image";
import Link from "next/link";
import Author from "../../components/_child/Author";
import Fetcher from "../../lib/fetcher";
//import spinner from "./_child/spinner";
//import error from "./_child/error";
const Related = () => {
	const { data, isLoading, isError } = Fetcher("api/posts");
	if (isLoading) return <spinner></spinner>;
	if (isError) return <error />;
	return (
		<section className="pt-20">
			<h1 className="uppercase text-3xl font-humane tracking-widest text-[#0077b6] font-bold  text-center  py-10 underline">
				Related
			</h1>

			<div className="flex flex-col gap-10">
				{data && data.map((value, id) => <Post data={value} key={id} />)}
			</div>
		</section>
	);
};

export default Related;

function Post({ data }) {
	const { id, title, subtitle, category, img, published, author, description } =
		data;
	return (
		<div className="flex gap-5">
			<div className="image flex flex-col justify-start cursor-pointer">
				<Link href={`posts/${id}`}>
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
					<Link href={`posts/${id}`}>
						<a className="text-[#669bbc] hover:text-[#0077b6] text-2xl font-bold leading-10 uppercase font-humane tracking-widest cursor-pointer">
							{category || "unknown"}
						</a>
					</Link>
				</div>

				<div className="title">
					<Link href={`posts/${id}`}>
						<a className="text-slate-500 hover:text-[#5d9bbc] text-xl   font-bold cursor-pointer">
							{title || "Title"}
						</a>
					</Link>

					<Link href={`posts/${id}`}>
						<a className="text-slate-400 hover:text-[#5d9bbc] ml-2">
							-{published || "unknown"}
						</a>
					</Link>
				</div>
				{author ? <Author {...author} /> : <></>}
			</div>
		</div>
	);
}
