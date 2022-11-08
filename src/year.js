import Question from './question';



export default class Year {
	constructor (app, jsonData) {
		this.app = app;
		this.jsonData = jsonData;
		this.year = jsonData.year;
		this.path = `${this.year}`;
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
		this.x = this.questions.filter(q => q.answer === 'X');
		this.statements = this.questions.filter(q => q.statements);
		this.matching = this.questions.filter(q => q.matching);
		this.simple = this.questions.filter(q => (!q.matching) && (!q.statements));
	}

	get nA () { return this.a.length; }
	get nB () { return this.b.length; }
	get nC () { return this.c.length; }
	get nD () { return this.d.length; }
	get nX () { return this.x.length; }

	get nS () { return this.statements.length; }
	get nM () { return this.matching.length; }
	get nSimple () { return this.simple.length; }
}
