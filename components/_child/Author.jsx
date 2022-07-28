import Image from "next/image";
import Link from "next/link";


const Author = ({ name, img, designation }) => {
	if(!name && !img) return <></>
	return (
		<div className="author flex py-5">
			<div className="flex">
				<Image
					src={img}
					alt=""
					width="120px"
					height="100px"
					className="rounded-full "
				/>
			</div>
			<div className=" flex-col justify-center px-4 hidden md:flex">
				<Link href="/">
					<a className="text-sm font-bold text-gray-600 hover:text-gray-800">
						{name}
					</a>
				</Link>

				<span className="text-xs text-gray-500"> {designation}</span>
			</div>
			
		</div>
	);
};

export default Author;
