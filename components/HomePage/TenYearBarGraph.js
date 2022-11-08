import React from 'react';

import Chart from 'chart.js/auto';



export default function TenYearBarGraph ({
	app, title="TenYearBarGraph", min=0, max=100,
	getLabel, getData
}) {

	const canvasElement = React.useRef();

	const years = [...app.years].reverse();
	const data = {
		labels: years.map(y => getLabel(y)),
		datasets: [{
			label: title,
			backgroundColor: '#4169e1a0',
			borderColor: '#4169e1',
			borderWidth: 2,
			data: years.map(y => getData(y)),
		}]
	};

	const config = {
		type: 'bar',
		data: data,
		options: {
			scales: {
				y: {
					suggestedMin: min,
					suggestedMax: max
				}
			}
		}
	};

	React.useEffect(() => {
		const myChart = new Chart(
			canvasElement.current,
			config
		);

		return () => myChart.destroy();
	}, []);

	return (
		<div className="text-center py-8">
			<h3 className="py-2">{title}</h3>
			<div>
				<canvas ref={canvasElement} className="bg-white p-4"></canvas>
			</div>
		</div>
	);
}
