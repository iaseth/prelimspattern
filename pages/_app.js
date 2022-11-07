import Layout from '../components/Layout';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
	const appdata = {};

	return (
		<Layout {...{appdata}}>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
