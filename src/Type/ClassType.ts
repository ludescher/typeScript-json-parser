import AbstractEntity from "../Abstract/AbstractEntity";

type ClassType = {
    new(): AbstractEntity,
    EntityIdentifier: string,
    UniqueIdentifier: string,
    TypeMap: object,
};

export default ClassType;