
import NavBar from "./NavBar"
import Footer from "./Footer"
import Head from "next/head";
const Layout = ({children}) => {
  return (
		<>
			<Head>
				<title>Stillness</title>
				<meta name="description" value="This is my blog" />
			</Head>
			<div>
				<NavBar />
				{children}
				<Footer />
			</div>
		</>
	);
}

export default Layout