import IKeyValue from "../Interface/IKeyValue";
declare abstract class AbstractEntity {
    static EntityIdentifier: string;
    static UniqueIdentifier: string;
    static TypeMap: IKeyValue;
    entityId: string | null;
}
export default AbstractEntity;
//# sourceMappingURL=AbstractEntity.d.ts.map