import { AbstractEntity, SupportedType } from 'typescript-json-parser';

class Task extends AbstractEntity {
    static EntityIdentifier = '@task';
    static UniqueIdentifier = 'id';
    static TypeMap = {
        id: SupportedType.Number,
        address: SupportedType.String,
        payload: SupportedType.String,
        driver: SupportedType.Relation,
        vehicle: SupportedType.Relation,
    }
    static ConversionTypeMap = {
        driver: '@user',
        vehicle: '@vehicle',
    };

    /**
     * @type {(null|number)}
     */
    id;

    /**
     * @type {(null|string)}
     */
    address;

    /**
     * @type {(null|string)}
     */
    payload;

    /**
     * @type {(null|User)}
     */
    driver;

    /**
     * @type {(null|Vehicle)}
     */
    vehicle;

    constructor() {
        super();
        this.id = null;
        this.address = null;
        this.payload = null;
        this.driver = null;
        this.vehicle = null;
    }
}

export default Task;