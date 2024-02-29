import ObjectTemplateRepo from "../cardAnotations/CardContentAnnotations.js";
export class ProductListInjection {
    constructor() {
    }
    injectList(targetListId, products) {
        const htmlElementList = document.getElementById(targetListId);
        if (!htmlElementList) {
            throw new Error("tag no found");
        }
        if (Array.isArray(products)) {
            products.forEach((product => {
                htmlElementList.appendChild(this.ProductPatternTamplete(product));
            }));
        }
    }
    ProductPatternTamplete(product) {
        const objectsTemplate = ObjectTemplateRepo.getInstance();
        const tamplete = objectsTemplate.getObjectTemplate('Product');
        const divElement = document.createElement('li');
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
        return divElement;
    }
}
export class TematicProductListInjection {
    constructor() {
    }
    injectCardListC(targetListId, sectionCardProducts) {
        const htmlElementList = document.getElementById(targetListId);
        if (!htmlElementList) {
            throw new Error("tag no found");
        }
        if (Array.isArray(sectionCardProducts)) {
            sectionCardProducts.forEach((sectionCardProduct => {
                htmlElementList.appendChild(this.ProductPatternTamplete(sectionCardProduct));
            }));
        }
    }
    ProductPatternTamplete(sectionCardProduct) {
        const objectsTemplate = ObjectTemplateRepo.getInstance();
        const tamplete = objectsTemplate.getObjectTemplate('SectionCard');
        const divElement = document.createElement('li');
        const imageElement = document.createElement(tamplete._imageSource);
        const shortMensageElement = document.createElement(tamplete._shortMensage);
        const patterElement = document.createElement('p');
        const sectionNameElement = document.createElement(tamplete._sectionName);
        imageElement.src = sectionCardProduct.imageSource;
        imageElement.alt = sectionCardProduct.imageDescription;
        shortMensageElement.innerText = sectionCardProduct.shortMensage;
        sectionNameElement.innerText = sectionCardProduct.sectionName;
        patterElement.innerText = "Explore Items";
        divElement.appendChild(shortMensageElement);
        divElement.appendChild(sectionNameElement);
        divElement.appendChild(patterElement);
        divElement.appendChild(imageElement);
        return divElement;
    }
}
