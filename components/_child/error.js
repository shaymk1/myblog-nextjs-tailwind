import Image from "next/image";


export default function error(){
    return (
			<div className="text-center py-10">
				<h1 className="uppercase text-4xl font-humane tracking-widest text-[#0077b6] font-bold  py-10 ">
					Something went wrong!
				</h1>
                <Image src="/images/404_Not_found.png" alt=""  width="400px" height="400px"/>
			</div>
		);
}