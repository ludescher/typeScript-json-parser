import InvalidJsonError from "../Error/InvalidJsonError";

class PropertyValue {
    private _property: string | undefined;
    private _value: any;

    get property(): string | undefined {
        return this._property;
    }

    set property(property: string | undefined) {
        this._property = property;
    }

    get value(): any {
        return this._value;
    }

    set value(value: any) {

        if (this._property === undefined) {
            throw new InvalidJsonError();
        }

        this._value = value;
    }

}

export default PropertyValue;