


export default class Question {
	constructor (year, answer) {
		this.year = year;
		this.answer = answer.toUpperCase();
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
