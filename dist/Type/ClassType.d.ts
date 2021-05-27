import AbstractEntity from "../Abstract/AbstractEntity";
import IKeyValue from "../Interface/IKeyValue";
declare type ClassType = {
    new (): AbstractEntity;
    EntityIdentifier: string;
    UniqueIdentifier: string;
    TypeMap: IKeyValue;
};
export default ClassType;
//# sourceMappingURL=ClassType.d.ts.map