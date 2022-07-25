import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<>
			<section className="py-16 ">
				<div className="container mx-auto md:px-20">
					<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold pb-12 text-center">
						Trending
					</h1>
                    
					{Slide()}
				</div>
			</section>
		</>
	);
};

export default Hero;

function Slide() {
	return (
		<div className="grid md:grid-cols-2">
			<div className="image">
				<Link href="/">
					<a>
						<Image
							src="/images/nemaste-1.jpg"
							width="600px"
							height="600px"
							alt="nemaste"
						/>
					</a>
				</Link>
			</div>
			<div className="info flex justify-center flex-col ml-3">
				<div className="cat">
					<Link href="/">
						<a className="text-[#669bbc] hover:text-[#0077b6] text-2xl font-bold leading-10 uppercase font-humane tracking-widest">
							Spirituality{" "}
						</a>
					</Link>
				</div>
				<div className="title">
					<Link href="/">
						<a className="text-slate-500 hover:text-[#5d9bbc] text-3xl md:text-6xl font-bold">
							The Invitation by Oriah Mountain Dreamer
						</a>
					</Link>

					<Link href="/">
						<a className="text-slate-400 hover:text-[#5d9bbc] ml-2">
							-25 July 2022
						</a>
					</Link>
				</div>

				<div className="text-gray-500 text-clip">
					<p className="p-4 text-xs  md:text-sm">
						It doesn’t interest me if the story you’re telling me is true. I
						want to know if you can disappoint another to be true to yourself. I
						want to know if you can see beauty even when it is not pretty every
						day, and if you can source your life from God’s presence.
					</p>

					<p className="p-4 text-xs md:text-sm">
						If you can bear the accusation of betrayal and not betray your own
						soul. I want to know if you can be faithful, and therefore be
						trustworthy. I want to know if you can live with failure, yours and
						mine, and still stand on the edge of a lake and shout to the silver
						of the full moon.
					</p>

					<p className="p-4 text-xs md:text-sm">
						It doesn’t interest me to know where you live or how much money you
						have. I want to know if you can get up after a night of grief and
						despair, weary and bruised to the bone -- and do what needs to be
						done -- for the children.
					</p>

					<p className="p-4 text-xs md:text-sm mb-2">
						It doesn’t interest me who you are or how you came to be here. I
						want to know if you will stand in the center of the fire with me --
						and not shrink back. It doesn’t interest me where or what or “with
						whom you have studied”. I want to know what sustains you from the
						inside when all else falls away. I want to know if you can be alone
						with yourself and if you truly like the company you keep - - in the
						empty moments. .
					</p>
				</div>
			</div>
		</div>
	);
}
