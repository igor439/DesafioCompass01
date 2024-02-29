import { h1, p } from "../cardAnotations/CardContentAnnotations.js";


export class Blog {
    @h1
    private _title: string;
    @p
    private _description: string;
    @p
    private _date: string;
    @p
    private _commentsNumber: number;

    constructor(title: string, description: string, date: string, commentsNumber: number) {
        this._title = title;
        this._description = description;
        this._date = date;
        this._commentsNumber = commentsNumber;
    }

    // Getter and Setter for 'title'
    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    // Getter and Setter for 'description'
    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    // Getter and Setter for 'date'
    get date(): string {
        return this._date;
    }

    set date(value: string) {
        this._date = value;
    }

    // Getter and Setter for 'commentsNumber'
    get commentsNumber(): number {
        return this._commentsNumber;
    }

    set commentsNumber(value: number) {
        this._commentsNumber = value;
    }
}

