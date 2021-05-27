import InvalidJsonError from "../Error/InvalidJsonError";
class PropertyValue {
    get property() {
        return this._property;
    }
    set property(property) {
        this._property = property;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._property === undefined) {
            throw new InvalidJsonError();
        }
        this._value = value;
    }
}
export default PropertyValue;
//# sourceMappingURL=PropertyValue.js.map