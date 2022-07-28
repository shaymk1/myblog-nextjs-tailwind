import Link from "next/link";
import {
	FaFacebook,
	FaGithubSquare,
	FaInstagramSquare,
	FaLinkedin,
} from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";

import NewsLetter from "./_child/NewsLetter";
import About from "../pages/About";
const Footer = () => {
  const bg={
    backgroundImage:"url('/images/footer.png')",
    backgroundRepeat:'no-repeat',
    backgroundPosition:'bottom left'
  }
	return (
		<footer className="bg-[#aab3c3]" style={bg}>
			<NewsLetter />
			<div className="container mx-auto md:px-20 py-12 px-4">
				<div className="py-5">
					<div className="flex gap-6 justify-center">
						{/*social -media-icons*/}
						<div className="flex gap-6 text-[#0077b6] cursor-pointer items-center">
							<Link href="https://github.com/shaymk1">
								<a>
									{" "}
									<FaGithubSquare
										size={25}
										className=" text-[#0077b6] hover:text-[#f5cac3] transition duration-150 ease-in-out"
									/>
								</a>
							</Link>
							<Link href="https://www.linkedin.com/">
								<a>
									<FaLinkedin
										size={25}
										className=" text-[#0077b6] hover:text-[#f5cac3] transition duration-150 ease-in-out"
									/>
								</a>
							</Link>
							<Link href="https://www.facebook.com/">
								<a>
									<FaFacebook
										size={25}
										className=" text-[#0077b6]   hover:text-[#f5cac3] transition duration-150 ease-in-out"
									/>
								</a>
							</Link>

							<Link href="https://www.instagram.com/">
								<a>
									{" "}
									<FaInstagramSquare
										size={25}
										className=" text-[#0077b6] hover:text-[#f5cac3] transition duration-150 ease-in-out"
									/>
								</a>
							</Link>
							<Link href="/About">
								<a className="md:text-md sm:text-xs rounded-full p-2 m-1 bg-white text-[#0077b6]hover:text-gray-600">
									{" "}
									<SiAboutdotme
										size={14}
										className=" 
										hover:text-gray-600
										 transition duration-150 ease-in-out "
									/>
								</a>
							</Link>
						</div>
					</div>
					<div className="text-center">
						<p className="py-5 text-xs  md:text-sm text-gray-500">
							Copyright &copy; All Rights Reserved | Shay Kekae 2022
						</p>
					</div>

					<p className="text-gray-500 text-center">Terms & Conditions</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
