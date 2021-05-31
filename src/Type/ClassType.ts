import AbstractEntity from "../Abstract/AbstractEntity";
import ITypeMapEntry from "../Interface/ITypeMapEntry";

type ClassType = {
    new(): AbstractEntity,
    EntityIdentifier: string,
    UniqueIdentifier: string,
    TypeMap: ITypeMapEntry,
    GetConversionEntityIdentifier(key: string): string,
};

export default ClassType;