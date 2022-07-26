import Image from "next/image";
import Link from "next/link";

const AuthorTwo = () => {
	return (
		<div className="author flex py-5">
			<Image
				src="/blue-smoke.jpg"
				alt=""
				width="100px"
				height="70px"
				className="rounded-full"
			/>
			<div className="flex flex-col justify-center px-4 ">
				<Link href="/">
					<a className="text-md font-bold text-md text-gray-600 hover:text-gray-800">
						Puleng Ledwaba
					</a>
				</Link>

				<span className="text-xs text-gray-500"> Co-Founder</span>
			</div>
		</div>
	);
};

export default AuthorTwo;
