import Link from 'next/link';



export default function YearSummary ({year}) {
	const questionItems = year.questions.map(q => {
		const className = "px-1 py-3 rounded " + q.getBgClass();
		return (
			<div key={q.number} className="p-1 text-white text-sm font-bold">
				<div className={className}>{q.number}</div>
			</div>
		);
	});

	return (
		<div className="text-center py-12 px-4">
			<Link href={year.href} className="block">
				<h2 className="font-bold text-3xl py-4">{year.year}</h2>
			</Link>

			<div className="grid grid-cols-5 sm:grid-cols-10 max-w-lg mx-auto">
				{questionItems}
			</div>
		</div>
	);
}
