import Year from './year';



export default class App {
	constructor (jsonData) {
		this.jsonData = jsonData;
		this.years = jsonData.years.map(yearData => new Year(this, yearData));
		this.questions = [];

		this.years.forEach(y => {
			this.questions = this.questions.concat(y.questions);
		});

		this.app = new Year(this, {year: 'All', answers: []});
		this.app.questions = this.questions;

		this.eleven = [...this.years, this.app];
		this.eleven.forEach(e => e.process());
	}
}
