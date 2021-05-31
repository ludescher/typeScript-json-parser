import InvalidPropertyError from "../Error/InvalidPropertyError";
class AbstractEntity {
    constructor() {
        this.entityId = null;
    }
    static GetConversionEntityIdentifier(key) {
        if (!(key in this.ConversionTypeMap)) {
            throw new InvalidPropertyError(key);
        }
        return this.ConversionTypeMap[key];
    }
}
AbstractEntity.TypeMap = {};
AbstractEntity.ConversionTypeMap = {};
export default AbstractEntity;
//# sourceMappingURL=AbstractEntity.js.map