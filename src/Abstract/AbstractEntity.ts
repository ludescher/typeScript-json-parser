import InvalidPropertyError from "../Error/InvalidPropertyError";
import IConversionTypeMapEntry from "../Interface/IConversionTypeMapEntry";
import ITypeMapEntry from "../Interface/ITypeMapEntry";

abstract class AbstractEntity {
    static EntityIdentifier: string;
    static UniqueIdentifier: string;
    static TypeMap: ITypeMapEntry = {};
    private static ConversionTypeMap: IConversionTypeMapEntry = {};
    entityId: string | null = null;

    static GetConversionEntityIdentifier(key: string): string {
        if (!(key in this.ConversionTypeMap)) {
            throw new InvalidPropertyError(key);
        }
        return this.ConversionTypeMap[key];
    }
}

export default AbstractEntity;