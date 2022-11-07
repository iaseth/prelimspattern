import Year from './year';



export default class App {
	constructor (jsonData) {
		this.jsonData = jsonData;
		this.years = jsonData.years.map(yearData => new Year(this, yearData));
		this.questions = [];

		this.years.forEach(y => {
			this.questions = this.questions.concat(y.questions);
		});

		this.asYear = new Year(this, {year: 'total', answers: []});
		this.asYear.questions = this.questions;

		this.eleven = [...this.years, this.asYear];
		this.eleven.forEach(e => e.process());
	}
}
