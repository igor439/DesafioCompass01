import { ProductListInjection } from "./List.js";
import { SectionFactory } from "./SectionFactory.js";
export class Section00 extends SectionFactory {
    constructor(imgSourceObj, title, textContent, targetId) {
        super(imgSourceObj, title, textContent, targetId);
    }
    sectionAmount(targetId, product) {
        this.amoutSectionPattern();
        const injection = new ProductListInjection();
        injection.injectList(targetId, product);
    }
}
