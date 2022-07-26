//import Head from 'next/head'
//import Image from 'next/image'
import LatestPosts from "../components/LatestPosts";
import MainPage from "../components/MainPage";
import MostPopular from "../components/MostPopular";
import Categories from "../components/Categories";

export default function Home() {
	return (
		<>
			<div>
				<MainPage />
				<LatestPosts />
        <MostPopular/>
        <Categories/>
			</div>
		</>
	);
}
