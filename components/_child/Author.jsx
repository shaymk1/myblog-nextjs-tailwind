import Image from "next/image";
import Link from "next/link";

const Author = () => {
	return (
		<div className="author flex py-5">
			<Image
				src="/images/author/myself-2.jpg"
				alt=""
				width="60px"
				height="60px"
				className="rounded-full"
			/>
			<div className="flex flex-col justify-center px-4 ">
				<Link href="/">
					<a className="text-md font-bold text-gray-600 hover:text-gray-800">
						Shay Kekae
					</a>
				</Link>

				<span className="text-xs text-gray-500"> Founder</span>
			</div>
		</div>
	);
};

export default Author;
