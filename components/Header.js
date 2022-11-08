import Link from 'next/link';



export default function Header ({page}) {
	return (
		<header className="bg-rose-600 text-white border-y-2 border-zinc-700">
			<div className="max-w-5xl mx-auto text-center px-4 py-6">
				<h3>
					<Link href="/">Prelims Pattern</Link>
				</h3>
			</div>
		</header>
	);
}
