export class SectionFactory {
    constructor(imgSourceObj, title, textContent, targetId) {
        this._imgSource = imgSourceObj;
        this._textContent = textContent;
        this._targetId = targetId;
        this._title = title;
    }
    amoutSectionPattern() {
        const htmlElement = document.getElementById(this._targetId);
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
}
