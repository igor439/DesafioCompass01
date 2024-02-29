import ObjectTemplateRepo from "../objectLayoutRepo/index.js";
export default class ObjectTemplateRepoWrapper {
    constructor() {
        // Prevent instantiation
    }
    static getInstance() {
        if (!ObjectTemplateRepoWrapper._instance) {
            ObjectTemplateRepoWrapper._instance = new ObjectTemplateRepo();
        }
        return ObjectTemplateRepoWrapper._instance;
    }
    static templateRepoRegisterClass(className) {
        const instance = ObjectTemplateRepoWrapper.getInstance();
        instance.templateRepoRegisterClass(className);
    }
    static addTag(className, key, tag) {
        const instance = ObjectTemplateRepoWrapper.getInstance();
        instance.addTag(className, key, tag);
    }
}
