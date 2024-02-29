var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h1, image, p } from "../cardAnotations/CardContentAnnotations.js";
export class Product {
    constructor(name, description, price, imageSource, discountPercent) {
        this._name = name;
        this._description = description;
        this._price = price;
        this._imageSource = imageSource;
        this._imageDescription = '';
        this._discountedPrice = this.calculateDiscountedPrice(discountPercent);
    }
    // Getter e Setter para 'name'
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    // Getter e Setter para 'description'
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    // Getter e Setter para 'price'
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    // Getter para 'discountedPrice'
    get discountedPrice() {
        return this._discountedPrice;
    }
    // Método privado para calcular o preço com desconto
    calculateDiscountedPrice(discountPercent) {
        const discountedPrice = this._price - this._price * (discountPercent / 100);
        return Number(discountedPrice.toFixed(2));
    }
    get imageSource() {
        return this._imageSource;
    }
    set imageSource(newSource) {
        this._imageSource = newSource;
    }
    get imageDescription() {
        return this._imageDescription;
    }
    set imageDescription(value) {
        this._imageDescription = value;
    }
}
__decorate([
    h1
], Product.prototype, "_name", void 0);
__decorate([
    p
], Product.prototype, "_description", void 0);
__decorate([
    p
], Product.prototype, "_price", void 0);
__decorate([
    image
], Product.prototype, "_imageSource", void 0);
