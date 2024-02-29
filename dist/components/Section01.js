import { Product } from "../models/Product.js";
import { SectionFactory } from "./SectionFactory.js";
import ObjectTemplateRepo from "../cardAnotations/CardContentAnnotations.js";
export class Section01 extends SectionFactory {
    constructor(imgSourceObj, title, textContent, targetId) {
        super(imgSourceObj, title, textContent, targetId);
        this._targetSectionId = targetId;
    }
    sectionAmount(targetSectionId, product) {
        const htmlElementSection = document.getElementById(this._targetSectionId);
        if (!htmlElementSection) {
            throw new Error("tag no found");
        }
        this.amoutSectionPattern();
        if (product instanceof Product) {
            const objectsTemplate = ObjectTemplateRepo.getInstance();
            const tamplete = objectsTemplate.getObjectTemplate('Product');
            const divElement = document.createElement('div');
            const imageElement = document.createElement(tamplete._imageSource);
            const nameElement = document.createElement(tamplete._name);
            const descriptionElement = document.createElement(tamplete._description);
            const priceElement = document.createElement(tamplete._description);
            const discoutPriceElement = document.createElement('span');
            discoutPriceElement.className = "greenText";
            discoutPriceElement.innerHTML = "   " + product.discountedPrice.toString();
            imageElement.src = product.imageSource;
            imageElement.alt = product.imageDescription;
            nameElement.innerText = product.name;
            descriptionElement.innerText = product.description;
            priceElement.innerText = product.price.toString();
            priceElement.appendChild(discoutPriceElement);
            divElement.appendChild(imageElement);
            divElement.appendChild(nameElement);
            divElement.appendChild(descriptionElement);
            divElement.appendChild(priceElement);
            htmlElementSection.appendChild(divElement);
        }
    }
}
