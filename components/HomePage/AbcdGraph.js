import React from 'react';

import Chart from 'chart.js/auto';



export default function AbcdGraph ({
	app, title="AbcdGraph", min=0, max=40,
	filter = () => true,
	getLabel
}) {

	const canvasElement = React.useRef();

	const years = [app.overall, ...app.years].reverse();

	const COLORS = {
		A: '#ee0000',
		B: '#00ee00',
		C: '#0000ee',
		D: '#eeee00',
	};

	const getYearData = (year, option) => {
		const questions = year.questions.filter(q => filter(q));
		const q2 = questions.filter(q => q.answer === option);
		return Math.round(q2.length * 100 / questions.length);
	};

	const getDataset = (option) => {
		return {
			label: option.toUpperCase(),
			backgroundColor: COLORS[option] + "90",
			borderColor: COLORS[option],
			borderWidth: 2,
			data: years.map(y => getYearData(y, option)),
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
		<div className="text-center py-12">
			<h3 className="py-2">{title}</h3>
			<div className="py-4">
				<canvas ref={canvasElement} className="bg-white p-4"></canvas>
			</div>
		</div>
	);
}
