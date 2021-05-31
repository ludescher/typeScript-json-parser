import ITypeMapEntry from "../Interface/ITypeMapEntry";
declare abstract class AbstractEntity {
    static EntityIdentifier: string;
    static UniqueIdentifier: string;
    static TypeMap: ITypeMapEntry;
    private static ConversionTypeMap;
    entityId: string | null;
    static GetConversionEntityIdentifier(key: string): string;
}
export default AbstractEntity;
//# sourceMappingURL=AbstractEntity.d.ts.map