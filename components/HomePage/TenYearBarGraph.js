import React from 'react';

import Chart from 'chart.js/auto';



export default function TenYearBarGraph ({
	app, title="TenYearBarGraph",
	getLabel, getData
}) {

	const canvasElement = React.useRef();

	const years = [...app.years].reverse();
	const data = {
		labels: years.map(y => getLabel(y)),
		datasets: [{
			label: title,
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(205, 99, 132)',
			borderWidth: 2,
			data: years.map(y => getData(y)),
		}]
	};

	const config = {
		type: 'bar',
		data: data,
		options: {}
	};

	React.useEffect(() => {
		const myChart = new Chart(
			canvasElement.current,
			config
		);

		return () => myChart.destroy();
	}, []);

	return (
		<div className="text-center py-12">
			<h3 className="py-4">{title}</h3>
			<div>
				<canvas ref={canvasElement} className="bg-white p-4"></canvas>
			</div>
		</div>
	);
}
