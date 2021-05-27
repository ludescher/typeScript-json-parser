abstract class AbstractEntity {
    static EntityIdentifier: string;
    static UniqueIdentifier: string;
    static TypeMap: object;
    entityId: string | null = null;
}

export default AbstractEntity;