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

	process () {
		this.a = this.questions.filter(q => q.answer === 'A');
		this.b = this.questions.filter(q => q.answer === 'B');
		this.c = this.questions.filter(q => q.answer === 'C');
		this.d = this.questions.filter(q => q.answer === 'D');
	}
}
