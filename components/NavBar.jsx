import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import {
	FaFacebook,
	FaGithubSquare,
	FaInstagramSquare,
	FaLinkedin,
} from "react-icons/fa";

const NavBar = () => {
	//switching themes
	const {systemTheme, theme, setTheme} = useTheme()
	//checking if the component has been mounted
	const [mounted,setMounted] = useState(false)
	useEffect(()=>{
		setMounted(true)
	},[])
	const renderThemeChanger = ()=>{
		if(!mounted)return null
		const currentTheme = theme =='system'? systemTheme :theme

		if(currentTheme == 'dark'){
			return (
				<BsFillSunFill
					className="w-7 h-7 "
					role="button"
					onClick={()=> setTheme('light')}
				/>
			);
		}else{
			return (
				<BsFillMoonFill
					className="w-7 h-7 "
					role="button"
					onClick={() => setTheme("dark")}
				/>
			);
		}
	}
	return (
		<header className="bg-[#8e9aaf] ">
			<nav className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between md:justify-evenly text-center py-3 dark:border-slate-700">
				{/*search-post*/}
				<div className="md:flex-none w-96 order-1 sm:order-1 flex justify-center py-4 sm:py-0">
					<input type="text" name="" placeholder="search.." className="" />
				</div>
				{/*logo*/}
				<div className="shrink-w-80 sm:order-2 uppercase font-bold font-humane tracking-widest  text-3xl text-[#a9def9] hover:text-white">
					<Link href="/">
						<a>Stillness</a>
					</Link>
				</div>
				<div className="w-96 order-2 flex justify-center ">
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
				{/*theme*/}
				<div className="px-2 order-3 sm:order-3 py-4 pr-4">
					{renderThemeChanger()}
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
