import { Product } from "../models/Product.js";

export type ObjectHTMLTemplate = {

    [prop: string]: string | imageTemplateObj;
  };

  export type TamplateObserver = {
    [prop:string]:ObjectHTMLTemplate
  }


  export type imageTemplateObj = {
    src:string;
    alt:string;
  }


  export type productTypeSectionAmount = Product | Product[]