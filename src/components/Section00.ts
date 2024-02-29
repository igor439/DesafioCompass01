import { Product } from "../models/Product.js";
import { imageTemplateObj, productTypeSectionAmount } from "../types/types.js";
import { ProductListInjection } from "./List.js";
import { SectionFactory } from "./SectionFactory.js";



export class Section00 extends SectionFactory{
   
    constructor(imgSourceObj:imageTemplateObj, title:string, textContent:string, targetId:string ) {
        super(imgSourceObj,title,textContent,targetId);

    }


    sectionAmount(targetId: string, product?:Product[] | undefined): void {
        this.amoutSectionPattern();
        const injection = new ProductListInjection();

        injection.injectList(targetId, product)


    }
}