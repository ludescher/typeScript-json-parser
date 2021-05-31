import IConversionTypeMapEntry from "../Interface/IConversionTypeMapEntry";
import ITypeMapEntry from "../Interface/ITypeMapEntry";
declare abstract class AbstractEntity {
    static EntityIdentifier: string;
    static UniqueIdentifier: string;
    static TypeMap: ITypeMapEntry;
    static ConversionTypeMap: IConversionTypeMapEntry;
    entityId: string | null;
}
export default AbstractEntity;
//# sourceMappingURL=AbstractEntity.d.ts.map