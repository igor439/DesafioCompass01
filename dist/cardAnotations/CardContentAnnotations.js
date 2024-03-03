var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function image(target, key) {
    let className = target.constructor.name;
    const tamplete = getFromLocalStorage("ClassesTamplate");
    if (tamplete) {
        //  console.log(tamplete)
        // console.log(className + "SDFSa")
        // console.log("lkdjfhpsdkjf")
        if (!tamplete[className]) {
            tamplete[className] = {};
        }
        tamplete[className][key] = 'img';
        saveToLocalStorage("ClassesTamplate", tamplete).then((result) => {
            // console.log("registrou")
        });
    }
}
export function h1(target, key) {
    let className = target.constructor.name;
    const tamplete = getFromLocalStorage("ClassesTamplate");
    if (tamplete) {
        //  console.log(tamplete)
        // console.log(className + "SDFSa")
        // console.log("lkdjfhpsdkjf")
        if (!tamplete[className]) {
            tamplete[className] = {};
        }
        tamplete[className][key] = 'h1';
        saveToLocalStorage("ClassesTamplate", tamplete).then((result) => {
            // console.log("registrou")
        });
    }
}
export function p(target, key) {
    let className = target.constructor.name;
    const tamplete = getFromLocalStorage("ClassesTamplate");
    if (tamplete) {
        console.log(tamplete);
        if (!tamplete[className]) {
            tamplete[className] = {};
        }
        tamplete[className][key] = 'p';
        saveToLocalStorage("ClassesTamplate", tamplete).then((result) => {
            // console.log("registrou")
        });
    }
}
export function h2(target, key) {
    let className = target.constructor.name;
    const tamplete = getFromLocalStorage("ClassesTamplate");
    if (tamplete) {
        //  console.log(tamplete)
        // console.log(className + "SDFSa")
        // console.log("lkdjfhpsdkjf")
        if (!tamplete[className]) {
            tamplete[className] = {};
        }
        tamplete[className][key] = 'h2';
        saveToLocalStorage("ClassesTamplate", tamplete).then((result) => {
            // console.log("registrou")
        });
    }
}
function saveToLocalStorage(key, value) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Convert the object to a JSON string
            const jsonString = JSON.stringify(value);
            // Save to localStorage
            sessionStorage.setItem(key, jsonString);
            //console.log(`Object saved to localStorage with key: ${key}`);
        }
        catch (error) {
            console.error("Error saving object to localStorage:", error);
        }
    });
}
function getFromLocalStorage(key) {
    try {
        const jsonString = sessionStorage.getItem(key);
        if (jsonString) {
            // Parse the JSON string to an object
            return JSON.parse(jsonString);
        }
    }
    catch (error) {
        console.error("Error retrieving object from localStorage:", error);
    }
    return null;
}
const arara = 'funciona';
export default class ObjectTemplateRepo {
    constructor() {
        this.ObjectsTemplates = [];
    }
    static getInstance() {
        if (!ObjectTemplateRepo._instance) {
            ObjectTemplateRepo._instance = new ObjectTemplateRepo();
        }
        return ObjectTemplateRepo._instance;
    }
    getObjectTemplate(key) {
        const template = getFromLocalStorage("ClassesTamplate");
        if (template && template[key]) {
            return template[key];
        }
    }
}
