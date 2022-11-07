import Header from './Header';
import Footer from './Footer';



export default function Layout ({appdata, children}) {
	return (
		<div className="bg-slate-100 bg-table-cloth">
			<Header {...{appdata}} />
			<div className="min-h-screen">{children}</div>
			<Footer {...{appdata}} />
		</div>
	);
}
