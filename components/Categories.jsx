import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
import Fetcher from "../lib/fetcher";
//import spinner from "./_child/spinner";
//import error from "./_child/error";

const Categories = () => {
	const { data, isLoading, isError } = Fetcher("api/posts");
	if (isLoading) return <spinner></spinner>;
	if (isError) return <error />;
	return (
		<section className="container mx-auto md:px-20 md:py-16 px-4 ">
			<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold  text-center underline pt-0 mb-4 py-12">
				All Categories
			</h1>
			<div className="grid md:grid-cols-3 gap-8">
				<div className="item">
					<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold pb-12  ">
						Spirituality
					</h1>
					<div className="flex flex-col gap-8">
						{/*posts*/}
						{data[1] ? <Post data={data[1]} /> : <></>}
						{data[2] ? <Post data={data[2]} /> : <></>}
						{data[3] ? <Post data={data[3]} /> : <></>}
					</div>
				</div>

				<div className="item">
					<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold pb-12 ">
						Coding
					</h1>

					<div className="flex flex-col gap-6">
						{/*posts*/}
						{data[4] ? <Post data={data[4]} /> : <></>}
						{data[5] ? <Post data={data[5]} /> : <></>}
						{data[6] ? <Post data={data[6]} /> : <></>}
					</div>
				</div>

				<div className="item">
					<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold pb-12 ">
						Art
					</h1>
					<div className="flex flex-col gap-6">
						{/*posts*/}
						{data[7] ? <Post data={data[7]} /> : <></>}
						{data[8] ? <Post data={data[8]} /> : <></>}
						{data[9] ? <Post data={data[9]} /> : <></>}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Categories;

function Post({data}) {
	const { id,title, category, img, published, author, description } = data;
	return (
		<div className="flex gap-5">
			<div className="image flex flex-col justify-start cursor-pointer">
				<Link href={`posts/${id}`}>
					<a>
						<Image
							className="cursor-pointer rounded"
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
						<a className="text-slate-500 hover:text-[#5d9bbc] font-bold cursor-pointer">
							{title || "Title"}
						</a>
					</Link>

					<Link href={`posts/${id}`}>
						<a className="text-slate-400 hover:text-[#5d9bbc] ml-2 text-xs cursor-pointer">
							-{published || "unknown"}
						</a>
					</Link>
				</div>

				{author ? <Author {...author} /> : <></>}
			</div>
		</div>
	);
}

