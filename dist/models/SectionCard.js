var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { image, p } from "../cardAnotations/CardContentAnnotations.js";
export class SectionCard {
    constructor(shortMensage, sectionName, imageSource) {
        this._shortMensage = shortMensage;
        this._sectionName = sectionName;
        this._imageSource = imageSource;
        this._imageDescription = '';
    }
    get shortMensage() {
        return this._shortMensage;
    }
    set shortMensage(newShortMensage) {
        this._shortMensage = newShortMensage;
    }
    get sectionName() {
        return this._sectionName;
    }
    set sectionName(newSectionName) {
        this._sectionName = newSectionName;
    }
    get imageSource() {
        return this._imageSource;
    }
    set imageSource(newImageSource) {
        this._imageSource = newImageSource;
    }
    get imageDescription() {
        return this._imageDescription;
    }
    set imageDescription(value) {
        this._imageDescription = value;
    }
}
__decorate([
    p
], SectionCard.prototype, "_shortMensage", void 0);
__decorate([
    p
], SectionCard.prototype, "_sectionName", void 0);
__decorate([
    image
], SectionCard.prototype, "_imageSource", void 0);
