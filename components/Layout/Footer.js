import Link from 'next/link';



function FooterLink ({text, href}) {
	return <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{text}</a>;
}

export default function Footer ({appdata}) {
	const yearItems = appdata.app.years.map((y, k) => {
		return (
			<Link key={k} className="block bg-slate-700 px-4 py-6 rounded shadow" href={y.href}>
				<h2>{y.year}</h2>
			</Link>
		);
	});

	return (
		<footer className="bg-slate-800 text-white border-t-4 border-blue-600">
			<div className="px-2 py-20 text-center">
				<div className="max-w-3xl mx-auto px-4 grid gap-4 grid-cols-2 md:grid-cols-4">
					{yearItems}
				</div>
			</div>

			<div>
				<div className="py-24 bg-slate-900 text-center">
					<h4>Created by <FooterLink text="Ankur Seth" href="https://github.com/iaseth" />.</h4>
					<div className="h-4"></div>
					<h4>View <FooterLink text="Source" href="https://github.com/iaseth/prelimspattern" />.</h4>
				</div>
			</div>
		</footer>
	);
}
