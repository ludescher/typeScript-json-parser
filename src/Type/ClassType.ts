import AbstractEntity from "../Abstract/AbstractEntity";
import IKeyValue from "../Interface/IKeyValue";

type ClassType = {
    new(): AbstractEntity,
    EntityIdentifier: string,
    UniqueIdentifier: string,
    TypeMap: IKeyValue,
};

export default ClassType;