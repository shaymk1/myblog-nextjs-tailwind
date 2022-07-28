import Link from "next/link";
import {
	FaFacebook,
	FaGithubSquare,
	FaInstagramSquare,
	FaLinkedin,
} from "react-icons/fa";

const NavBar = () => {
	return (
		<header className="bg-[#8e9aaf] ">
			<nav className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
				{/*search-post*/}
				<div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
					<input type="text" name="" placeholder="search.." className="" />
				</div>
				{/*logo*/}
				<div className="shrink-w-80 sm:order-2 uppercase font-bold font-humane tracking-widest  text-3xl text-[#a9def9] hover:text-white">
					<Link href="/">
						<a>Stillness</a>
					</Link>
				</div>
				<div className="w-96 order-3 flex justify-center ">
					{/*social -media-icons*/}
					<div className="flex gap-6 text-white hover:text-[#f5cac3] cursor-pointer ">
						<Link href="https://github.com/shaymk1">
							<a>
								{" "}
								<FaGithubSquare
									size={25}
									className=" text-white hover:text-[#f5cac3]"
								/>
							</a>
						</Link>
						<Link href="https://www.linkedin.com/">
							<a>
								<FaLinkedin
									size={25}
									className=" text-white hover:text-[#f5cac3]"
								/>
							</a>
						</Link>
						<Link href="https://www.facebook.com/">
							<a>
								<FaFacebook
									size={25}
									className=" text-white   hover:text-[#f5cac3]"
								/>
							</a>
						</Link>

						<Link href="https://www.instagram.com/">
							<a>
								{" "}
								<FaInstagramSquare
									size={25}
									className=" text-white hover:text-[#f5cac3]"
								/>
							</a>
						</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
