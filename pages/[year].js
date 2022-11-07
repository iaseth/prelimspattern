import YearPage from '../components/YearPage';
import {useRouter} from 'next/router';



export async function getStaticProps (context) {
	const props = {
		year: context.params.year
	};
	
	return {props};
}

export async function getStaticPaths () {
	const pathStrings = [
		'2013', '2014', '2015', '2016',
		'2017', '2018', '2019', '2020',
		'2021', '2022', 'total'
	];

	const paths = [];
	pathStrings.forEach(ps => {
		const params = {
			year: ps
		};

		paths.push({params});
	});

	return {
		paths,
		fallback: false
	};
}

export default function Year ({appdata}) {
	const router = useRouter();
	const pathString = router.query.year;
	const year = appdata.app.eleven.find(e => e.path === pathString);

	return <YearPage {...{appdata, year}} />;;
}
