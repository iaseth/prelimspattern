import Footer from './Footer';



export default function Layout ({appdata, children}) {
	return (
		<div className="bg-slate-200 bg-table-cloth">
			<div className="min-h-screen">{children}</div>
			<Footer {...{appdata}} />
		</div>
	);
}
