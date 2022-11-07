import Question from './question';



export default class Year {
	constructor (app, jsonData) {
		this.app = app;
		this.jsonData = jsonData;
		this.year = jsonData.year;
		this.href = `${this.year}`;
		this.questions = jsonData.answers.map(q => new Question(this, q));
		this.questions.forEach((q, index) => {
			q.index = index;
			q.number = index+1;
		});
	}
}
