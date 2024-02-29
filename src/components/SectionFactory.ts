
import { imageTemplateObj, productTypeSectionAmount } from "../types/types.js";

export abstract  class SectionFactory{

    private _imgSource:imageTemplateObj;
    private _title:string;
    private _textContent:string;
    private _targetId:string;

    constructor(imgSourceObj:imageTemplateObj, title:string, textContent:string, targetId:string ) {

        this._imgSource = imgSourceObj;
        this._textContent = textContent;
        this._targetId = targetId;
        this._title = title;

        
    }


    protected amoutSectionPattern (){

        const htmlElement = document.getElementById(this._targetId) as HTMLElement;

        const headingElement = document.createElement('h1');
        const paragraphElement = document.createElement('p');
        const imageElement = document.createElement('img');

        // Adiciona conteúdo aos elementos
        headingElement.innerText = this._title; 
        paragraphElement.innerText = this._textContent;
        imageElement.src = this._imgSource.src; // Substitua 'caminho/para/sua/imagem.jpg' pelo caminho da sua imagem
        imageElement.alt = this._imgSource.alt;

        // Adiciona os elementos como filhos do elemento principal
        htmlElement.appendChild(headingElement);
        htmlElement.appendChild(paragraphElement);
        htmlElement.appendChild(imageElement);






    }

    abstract sectionAmount( targetId:string , product?: productTypeSectionAmount ):void;

    
}