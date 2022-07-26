import Author from "../../components/_child/Author";
import Image from "next/image";
import Link from "next/link";
import Related from "../../components/_child/Related";
const page = () => {
	return (
		<section className="container mx-auto md:px-2 py-15 w-1/2">
			<div className="flex justify-center ">
				<Author />
			</div>
			<div className="post py-10">
				<p className="text-xs  md:text-sm text-center text-gray-500 mb-6 ">
					I am just going to leave this here...
				</p>
				<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold  text-center  pb-5">
					The Invitation by Oriah Mountain Dreamer
				</h1>

			
				<div className="py-10">
					<Link href="/">
						<a>
							<Image
								className="rounded"
								src="/images/fruits/harnat.jpg
                            "
								width="900px"
								height="600px"
								alt="nemaste"
							/>
						</a>
					</Link>

					<div className="content text-gray-500 text-lg flex flex-col gap-4">
						<p className="p-4 text-xs  md:text-sm ">
							It doesn’t interest me if the story you’re telling me is true. I
							want to know if you can disappoint another to be true to yourself.
							I want to know if you can see beauty even when it is not pretty
							every day, and if you can source your life from God’s presence.
						</p>

						<p className="p-4 text-xs md:text-sm ">
							If you can bear the accusation of betrayal and not betray your own
							soul. I want to know if you can be faithful, and therefore be
							trustworthy. I want to know if you can live with failure, yours
							and mine, and still stand on the edge of a lake and shout to the
							silver of the full moon.
						</p>

						<p className="p-4 text-xs md:text-sm">
							It doesn’t interest me to know where you live or how much money
							you have. I want to know if you can get up after a night of grief
							and despair, weary and bruised to the bone -- and do what needs to
							be done -- for the children.
						</p>

						<p className="p-4 text-xs md:text-sm mb-2">
							It doesn’t interest me who you are or how you came to be here. I
							want to know if you will stand in the center of the fire with me
							-- and not shrink back. It doesn’t interest me where or what or
							“with whom you have studied”. I want to know what sustains you
							from the inside when all else falls away. I want to know if you
							can be alone with yourself and if you truly like the company you
							keep - - in the empty moments. .
						</p>
					</div>
				</div>
			</div>
			<Related/>
		</section>
	);
};

export default page;
