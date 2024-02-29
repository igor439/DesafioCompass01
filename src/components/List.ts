import ObjectTemplateRepo from "../cardAnotations/CardContentAnnotations.js";
import { Product } from "../models/Product.js";
import { SectionCard } from "../models/SectionCard.js";
import { ObjectHTMLTemplate, productTypeSectionAmount } from "../types/types.js";


export class ProductListInjection{

    constructor(){

    }

    injectList(targetListId: string, products?: Product[]): void {

        const htmlElementList = document.getElementById(targetListId) as HTMLElement;
        
        if (!htmlElementList) {
            throw new Error("tag no found");
        } 

        

        if (Array.isArray(products)){

            products.forEach((product =>{

                htmlElementList.appendChild(this.ProductPatternTamplete(product))

            }))

        }
    }

    ProductPatternTamplete(product:Product):HTMLLIElement{


        const objectsTemplate = ObjectTemplateRepo.getInstance();
        const tamplete = objectsTemplate.getObjectTemplate('Product') as ObjectHTMLTemplate;
        const divElement = document.createElement('li');

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
        priceElement.appendChild(discoutPriceElement);
        divElement.appendChild(imageElement);
        divElement.appendChild(nameElement);
        divElement.appendChild(descriptionElement);
        divElement.appendChild(priceElement);

        return divElement;

    }
}





export class TematicProductListInjection{

    constructor(){

    }

    injectCardListC(targetListId: string, sectionCardProducts?: SectionCard[]): void {

        const htmlElementList = document.getElementById(targetListId) as HTMLElement;
        
        if (!htmlElementList) {
            throw new Error("tag no found");
        } 

        

        if (Array.isArray(sectionCardProducts)){

            sectionCardProducts.forEach((sectionCardProduct =>{

                htmlElementList.appendChild(this.ProductPatternTamplete(sectionCardProduct))

            }))

        }
    }

    ProductPatternTamplete(sectionCardProduct:SectionCard):HTMLLIElement{


        const objectsTemplate = ObjectTemplateRepo.getInstance();
        const tamplete = objectsTemplate.getObjectTemplate('SectionCard') as ObjectHTMLTemplate;
        const divElement = document.createElement('li');

        const imageElement = document.createElement(tamplete._imageSource as string) as HTMLImageElement;
        const shortMensageElement = document.createElement(tamplete._shortMensage as string);
        const patterElement = document.createElement('p');
    

        const sectionNameElement= document.createElement(tamplete._sectionName as string)
        

    

        imageElement.src = sectionCardProduct.imageSource;
        imageElement.alt = sectionCardProduct.imageDescription;
        shortMensageElement.innerText = sectionCardProduct.shortMensage;
        sectionNameElement.innerText = sectionCardProduct.sectionName
        patterElement.innerText = "Explore Items"
        
        
        divElement.appendChild(shortMensageElement);
        divElement.appendChild(sectionNameElement);
        divElement.appendChild(patterElement);
        divElement.appendChild(imageElement);
        return divElement;

    }
}