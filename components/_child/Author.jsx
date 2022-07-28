import Image from "next/image";
import Link from "next/link";

const Author = () => {
	return (
		<div className="author flex py-5">
			<div className="flex">
				<Image
					src="/images/author/myself-2.jpg"
					alt=""
					width="120px"
					height="100px"
					className="rounded-full "
				/>
			</div>
			<div className=" flex-col justify-center px-4 hidden md:flex">
				<Link href="/">
					<a className="text-sm font-bold text-gray-600 hover:text-gray-800">
						Shay Kekae
					</a>
				</Link>

				<span className="text-xs text-gray-500"> Founder</span>
			</div>
		</div>
	);
};

export default Author;
