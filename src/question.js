


export default class Question {
	constructor (year, meta) {
		this.year = year;
		this.meta = meta;
		this.answer = this.meta.answer.toUpperCase();
		this.number = this.meta.number;
		this.statements = this.meta.statements;
		this.matching = this.meta.matching;
		this.simple = (this.statements || this.matching) ? false : true;
	}

	getBgClass () {
		switch (this.answer) {
		case 'A': return "bg-red-500";
		case 'B': return "bg-green-500";
		case 'C': return "bg-blue-500";
		case 'D': return "bg-yellow-400";
		default: return "bg-slate-500";
		}
	}
}
