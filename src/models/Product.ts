import { h1, image, p } from "../cardAnotations/CardContentAnnotations.js";

export class Product {

    @h1
    private _name: string;
    @p
    private _description: string;
    @p
    private _price: number;

    @image
    private _imageSource:string;

    private _discountedPrice: number;

    private _imageDescription:string;

    constructor(name: string, description: string, price: number,imageSource:string
        , discountPercent: number) {

        
        this._name = name;
        this._description = description;
        this._price = price;
        this._imageSource = imageSource;
        this._imageDescription = ''
        this._discountedPrice = this.calculateDiscountedPrice(discountPercent);
    }

    // Getter e Setter para 'name'
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    // Getter e Setter para 'description'
    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    // Getter e Setter para 'price'
    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    // Getter para 'discountedPrice'
    get discountedPrice(): number {
        return this._discountedPrice;
    }

    // Método privado para calcular o preço com desconto
    private calculateDiscountedPrice(discountPercent: number): number {
        const discountedPrice = this._price - this._price * (discountPercent / 100);
        return Number(discountedPrice.toFixed(2));
    }
    

    get imageSource():string{
        return this._imageSource;
    }

    set imageSource(newSource:string){

        this._imageSource = newSource;
    }

    get imageDescription(): string {
        return this._imageDescription;
    }

    set imageDescription(value: string) {
        this._imageDescription = value;
    }
}

