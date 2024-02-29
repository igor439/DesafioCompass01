import { image, p } from "../cardAnotations/CardContentAnnotations.js";


export class SectionCard{

    @p
    private _shortMensage:string;
    @p
    private _sectionName:string;
    @image
    private _imageSource:string;

    private _imageDescription:string;
    
    constructor(shortMensage:string,sectionName:string, imageSource:string){

        this._shortMensage = shortMensage;
        this._sectionName = sectionName;
        this._imageSource = imageSource;
        this._imageDescription = ''

    }

    
    get shortMensage(): string {
        return this._shortMensage
    }


    set shortMensage(newShortMensage:string){

        this._shortMensage = newShortMensage;

    }



    get sectionName(): string {
        return this._sectionName
    }


    
    public set sectionName(newSectionName : string) {
        this._sectionName = newSectionName;
    }
    



    get imageSource(): string {
        return this._imageSource
    }


    public set imageSource(newImageSource : string) {
        this._imageSource = newImageSource;
    }


    get imageDescription(): string {
        return this._imageDescription;
    }

    set imageDescription(value: string) {
        this._imageDescription = value;
    }
    
    
}