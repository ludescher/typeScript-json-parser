import AbstractEntity from "../Abstract/AbstractEntity";
import IConversionTypeMapEntry from "../Interface/IConversionTypeMapEntry";
import ITypeMapEntry from "../Interface/ITypeMapEntry";
declare type ClassType = {
    new (): AbstractEntity;
    EntityIdentifier: string;
    UniqueIdentifier: string;
    TypeMap: ITypeMapEntry;
    ConversionTypeMap: IConversionTypeMapEntry;
};
export default ClassType;
//# sourceMappingURL=ClassType.d.ts.map