import { error } from "console";
import { Product } from "../models/Product.js";
import { ObjectHTMLTemplate, imageTemplateObj, productTypeSectionAmount } from "../types/types.js";
import { SectionFactory } from "./SectionFactory.js";
import ObjectTemplateRepo from "../cardAnotations/CardContentAnnotations.js";


export class Section01 extends SectionFactory {
    
    private _targetSectionId:string
    
    constructor(imgSourceObj:imageTemplateObj, title:string, textContent:string, targetId:string ) {
        super(imgSourceObj,title,textContent,targetId);

        this._targetSectionId = targetId;
    }

    sectionAmount(targetSectionId: string, product?: productTypeSectionAmount): void {

        const htmlElementSection = document.getElementById(this._targetSectionId) as HTMLElement;
        
        if (!htmlElementSection) {
            throw new Error("tag no found");
        } 

        
      this.amoutSectionPattern();


        

        if (product instanceof Product){

            const objectsTemplate = ObjectTemplateRepo.getInstance();
            const tamplete = objectsTemplate.getObjectTemplate('Product') as ObjectHTMLTemplate;
            const divElement = document.createElement('div');

            const imageElement = document.createElement(tamplete._imageSource as string) as HTMLImageElement;
            const nameElement = document.createElement(tamplete._name as string);

        

            const descriptionElement= document.createElement(tamplete._description as string)
            const priceElement = document.createElement(tamplete._description as string)
            const discoutPriceElement = document.createElement('span');

            discoutPriceElement.className ="greenText";
            discoutPriceElement.innerHTML = "   " + product.discountedPrice.toString();
          

            imageElement.src = product.imageSource;
            imageElement.alt = product.imageDescription;
            nameElement.innerText = product.name
            descriptionElement.innerText = product.description
            priceElement.innerText = product.price.toString();
            priceElement.appendChild(discoutPriceElement)
            divElement.appendChild(imageElement);
            divElement.appendChild(nameElement);
            divElement.appendChild(descriptionElement);
            divElement.appendChild(priceElement);

            htmlElementSection.appendChild(divElement);


        }



        

       
        




    }
}