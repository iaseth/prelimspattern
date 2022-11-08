import React from 'react';

import Chart from 'chart.js/auto';



export default function AbcdGraph ({
	app, title="AbcdGraph", min=0, max=100,
	getLabel, getData
}) {

	const canvasElement = React.useRef();

	const years = [...app.years].reverse();

	const COLORS = {
		A: '#d12931',
		B: '#21d921',
		C: '#4169e1',
		D: '#d1d921',
	};

	const getDataset = (option) => {
		return {
			label: option.toUpperCase(),
			backgroundColor: COLORS[option] + "a0",
			borderColor: COLORS[option],
			borderWidth: 2,
			data: years.map(y => y.questions.filter(q => q.answer === option).length),
		};
	};

	const data = {
		labels: years.map(y => getLabel(y)),
		datasets: [
			getDataset('A'),
			getDataset('B'),
			getDataset('C'),
			getDataset('D'),
		]
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
