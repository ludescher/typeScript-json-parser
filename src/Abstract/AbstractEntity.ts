import IConversionTypeMapEntry from "../Interface/IConversionTypeMapEntry";
import ITypeMapEntry from "../Interface/ITypeMapEntry";

abstract class AbstractEntity {
    static EntityIdentifier: string;
    static UniqueIdentifier: string;
    static TypeMap: ITypeMapEntry = {};
    static ConversionTypeMap: IConversionTypeMapEntry = {};
    entityId: string | null = null;
}

export default AbstractEntity;