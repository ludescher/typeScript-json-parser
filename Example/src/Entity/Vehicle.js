import { AbstractEntity, SupportedType } from 'typescript-json-parser';

class Vehicle extends AbstractEntity {
    static EntityIdentifier = '@vehicle';
    static UniqueIdentifier = 'id';
    static TypeMap = {
        id: SupportedType.Number,
        brand: SupportedType.String,
        model: SupportedType.String,
        licenceplate: SupportedType.String,
        color: SupportedType.String,
    }
    static ConversionTypeMap = {};

    /**
     * @type {(null|number)}
     */
    id;

    /**
     * @type {(null|string)}
     */
    brand;

    /**
     * @type {(null|string)}
     */
    model;

    /**
     * @type {(null|string)}
     */
    licenceplate;

    /**
     * @type {(null|string)}
     */
    color;

    constructor() {
        super();
        this.id = null;
        this.brand = null;
        this.model = null;
        this.licenceplate = null;
        this.color = null;
    }
}

export default Vehicle;