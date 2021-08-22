import { AbstractEntity, SupportedType } from 'typescript-json-parser';

class Company extends AbstractEntity {
    static EntityIdentifier = '@company';
    static UniqueIdentifier = 'id';
    static TypeMap = {
        id: SupportedType.Number,
        created: SupportedType.Date,
        modified: SupportedType.Date,
        name: SupportedType.String,
        employees: SupportedType.ArrayRelation,
        vehicles: SupportedType.ArrayRelation,
        tasks: SupportedType.ArrayRelation,
    }
    static ConversionTypeMap = {
        employees: '@user',
        vehicles: '@vehicle',
        tasks: '@task',
    };

    /**
     * @type {(null|number)}
     */
    id;

    /**
     * @type {(null|Date)}
     */
    created;

    /**
     * @type {(null|Date)}
     */
    modified;

    /**
     * @type {(null|string)}
     */
    name;

    /**
     * @type {User[]}
     */
    employees;

    /**
     * @type {Vehicle[]}
     */
    vehicles;

    /**
     * @type {Task[]}
     */
    tasks;

    constructor() {
        super();
        this.id = null;
        this.name = null;
        this.created = null;
        this.modified = null;
        this.employees = [];
        this.vehicles = [];
        this.tasks = [];
    }
}

export default Company;