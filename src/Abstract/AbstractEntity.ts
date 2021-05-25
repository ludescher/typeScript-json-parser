abstract class AbstractEntity {
    static EntityIdentifier: string | null = null;
    static UniqueIdentifier: string = 'id';
    static TypeMap: object = {};
    entityId: string | null = null;
}

export default AbstractEntity;