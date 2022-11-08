import Year from './year';



export default class App {
	constructor (jsonData) {
		this.jsonData = jsonData;
		this.years = jsonData.years.map(yearData => new Year(this, yearData));
		this.questions = [];

		this.years.forEach(y => {
			this.questions = this.questions.concat(y.questions);
		});

		this.overall = new Year(this, {year: 'total', answers: []});
		this.overall.questions = this.questions;

		this.eleven = [...this.years, this.overall];
		this.eleven.forEach(e => e.process());
	}
}
