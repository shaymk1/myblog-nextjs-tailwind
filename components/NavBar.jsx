import Link from "next/link";

const NavBar = () => {
	return (
		<header className="bg-[#84a59d]">
			<nav className="xl:container xl:mx-auto">
				<div>
					<input type="text" name="" id="" />
				</div>

				<div>
					<Link href="/">
						<a>Nemaste</a>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
