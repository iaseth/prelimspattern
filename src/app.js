import Year from './year';



export default class App {
	constructor (jsonData) {
		this.jsonData = jsonData;
		this.years = jsonData.years.map(yearData => new Year(this, yearData));
	}
}
