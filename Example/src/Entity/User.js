import { AbstractEntity, SupportedType } from 'typescript-json-parser';

class User extends AbstractEntity {
    static EntityIdentifier = '@user';
    static UniqueIdentifier = 'id';
    static TypeMap = {
        id: SupportedType.Number,
        roles: SupportedType.Array,
        firstname: SupportedType.String,
        lastname: SupportedType.String,
        email: SupportedType.String,
        active: SupportedType.Boolean,
        company: SupportedType.Relation,
    }
    static ConversionTypeMap = {
        roles: SupportedType.String,
        company: '@company',
    };

    /**
     * @type {(null|number)}
     */
    id;

    /**
     * @type {string[]}
     */
    roles;

    /**
     * @type {(null|string)}
     */
    firstname;

    /**
     * @type {(null|string)}
     */
    lastname;

    /**
     * @type {(null|string)}
     */
    email;

    /**
     * @type {(null|boolean)}
     */
    active;

    /**
     * @type {(null|Company)}
     */
    company;

    constructor() {
        super();
        this.id = null;
        this.roles = [];
        this.firstname = null;
        this.lastname = null;
        this.email = null;
        this.active = null;
        this.company = null;
    }
}

export default User;