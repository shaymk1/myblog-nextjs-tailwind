import Image from "next/image";
import Link from "next/link";
import Fetcher from "../lib/fetcher";
import Author from "./_child/Author";
import spinner from "./_child/spinner";
import error from "./_child/error";

const LatestPosts = () => {
	//getPost().then(res=>console.log(res))
	const { data, isLoading, isError } = Fetcher("api/posts");
	if (isLoading) return <spinner></spinner>;
	if (isError) return <error />;
	return (
		<section className="container mx-auto md:px-20 py-10 px-4">
			<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold pb-12 text-center underline">
				Latest Posts
			</h1>

			{/*grid columns*/}
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
				{data && data.map((value, id) => (
					<Posts data={value} key={id}/> 
				))}
			</div>
		</section>
	);
};

export default LatestPosts;

function Posts({ data }) {
	const { id, title, subtitle, category, img, published, author, description } =
		data;
	return (
		<div className="item">
			<div className="images">
				<Link href="/">
					<a>
						<Image
							className="rounded"
							src={img || "/"}
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
							{category || "unknown"}
						</a>
					</Link>
				</div>

				<div className="title">
					<Link href="/">
						<a className="text-slate-500 hover:text-[#5d9bbc] text-xl  font-bold">
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
					<p className="p-4 text-xs  md:text-sm ">{subtitle || "subtitle"}</p>
				</div>
				{author ? <Author /> : <></>}
			</div>
		</div>
	);
}
