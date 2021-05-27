import IKeyValue from "../Interface/IKeyValue";

abstract class AbstractEntity {
    static EntityIdentifier: string;
    static UniqueIdentifier: string;
    static TypeMap: IKeyValue;
    entityId: string | null = null;
}

export default AbstractEntity;