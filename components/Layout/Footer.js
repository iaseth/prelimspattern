


function FooterLink ({text, href}) {
	return <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">{text}</a>;
}

export default function Footer ({appdata}) {

	return (
		<footer className="bg-slate-800 text-white border-t-4 border-blue-600">
			<div className="px-2 py-20 text-center">
				<div className="max-w-5xl mx-auto">
					<h2 className="px-2 py-6">Choose a Color</h2>
					<div className="flex flex-wrap justify-center"></div>
				</div>
			</div>

			<div>
				<div className="py-24 bg-slate-900 text-center">
					<h4>Created by <FooterLink text="Ankur Seth" href="https://github.com/iaseth" />.</h4>
					<div className="h-4"></div>
					<h4>View <FooterLink text="Source" href="https://github.com/iaseth/htmlcolors" />.</h4>
				</div>
			</div>
		</footer>
	);
}
