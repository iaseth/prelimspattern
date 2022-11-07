import App from '../src/app';
import jsonData from '../data/answers.json';
import Layout from '../components/Layout';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
	const appdata = {
		app: new App(jsonData)
	};

	return (
		<Layout {...{appdata}}>
			<Component {...pageProps} {...{appdata}} />
		</Layout>
	);
}

export default MyApp;
