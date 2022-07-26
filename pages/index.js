//import Head from 'next/head'
//import Image from 'next/image'
import LatestPosts from "../components/LatestPosts";
import MainPage from "../components/MainPage";

export default function Home() {
	return (
		<>
			<div>
				<MainPage />
				<LatestPosts />
			</div>
		</>
	);
}
