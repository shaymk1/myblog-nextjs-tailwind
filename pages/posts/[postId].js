import Image from "next/image";
import Link from "next/link";
import Author from "../../components/_child/Author";
import Related from "../../components/_child/Related";
//import helper from "../../lib/helper"
import getPost from "../../lib/helper";
//import spinner from "../../components/_child/spinner";
//import error from "../../components/_child/error";
import { useRouter } from "next/router";
import Fetcher from "../../lib/fetcher";
import { SWRConfig } from "swr";

export default function Page(fallback) {
	const router = useRouter();
	const { postId } = router.query;
	const { data, isLoading, isError } = Fetcher(`api/posts/${postId}`);
	if (isLoading) return <spinner></spinner>;
	if (isError) return <error />;
	return (
		//cache the data
		<SWRConfig value={{ fallback }}>
			<Article {...data} />
		</SWRConfig>
	);
}
function Article({
	title,
	category,
	img,
	published,
	author,
	description,
	subtitle,
}) {
	return (
		<section className="container mx-auto md:px-2 py-15 w-1/2">
			<div className="flex justify-center ">
				{author ? <Author {...author} /> : <></>}
			</div>
			<div className="post py-10">
				<p className="text-xs  md:text-sm text-center text-gray-500 mb-6 ">
					I am just going to leave this here...
				</p>
				<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold  text-center  pb-5">
					{title}
				</h1>

				<div className="py-10">
					<Link href="/">
						<a>
							<Image
								className="rounded"
								src={img}
								width="900px"
								height="600px"
								alt="nemaste"
							/>
						</a>
					</Link>

					<div className="content text-gray-500 text-lg flex flex-col gap-4">
						<p className="p-4 text-xs  md:text-sm ">{description}</p>
						<br />

						<p className="p-4 text-xs md:text-sm ">{description}</p>
						<br />
						<p className="p-4 text-xs md:text-sm">{description}</p>
						<br />

						<p className="p-4 text-xs md:text-sm mb-2">{description}</p>
						<br />
					</div>
				</div>
			</div>
			<Related />
		</section>
	);
}

//dynamic routing
export async function getStaticProps({ params }) {
	const posts = await getPost(params.postId);

	return {
		props: {
			fallback: {
				"/api/posts": posts,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = await getPost();
	const paths = posts.map((value) => {
		return {
			params: {
				postId: value.id.toString(),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}
