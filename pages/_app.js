import Layout from '../components/Layout'
import '../styles/globals.css'
import {ThemeProvider} from "next-themes"


function MyApp({ Component, pageProps }) {
  return (
		<Layout>
			<ThemeProvider enableSystem={true} attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</Layout>
	);
}

export default MyApp
