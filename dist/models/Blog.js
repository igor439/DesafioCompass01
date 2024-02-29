var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h1, p } from "../cardAnotations/CardContentAnnotations.js";
export class Blog {
    constructor(title, description, date, commentsNumber) {
        this._title = title;
        this._description = description;
        this._date = date;
        this._commentsNumber = commentsNumber;
    }
    // Getter and Setter for 'title'
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    // Getter and Setter for 'description'
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    // Getter and Setter for 'date'
    get date() {
        return this._date;
    }
    set date(value) {
        this._date = value;
    }
    // Getter and Setter for 'commentsNumber'
    get commentsNumber() {
        return this._commentsNumber;
    }
    set commentsNumber(value) {
        this._commentsNumber = value;
    }
}
__decorate([
    h1
], Blog.prototype, "_title", void 0);
__decorate([
    p
], Blog.prototype, "_description", void 0);
__decorate([
    p
], Blog.prototype, "_date", void 0);
__decorate([
    p
], Blog.prototype, "_commentsNumber", void 0);
