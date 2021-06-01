import AbstractEntity from "../Abstract/AbstractEntity";

interface IEntityEntry {
    [entityId: string]: AbstractEntity;
}

export default IEntityEntry;