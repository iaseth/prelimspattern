import Head from 'next/head';

import Header from '../Header';
import YearSummary from '../YearSummary';



export default function YearPage ({appdata, year}) {
	const title = `Prelims Pattern for ${year.year}`;

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header page={year} />

			<section>
				<div>
					<YearSummary year={year} />
				</div>
			</section>
		</div>
	);
}
