import AbstractEntity from "../Abstract/AbstractEntity";
import ClassType from "../Type/ClassType";
import EntityEntryMap from "../Type/EntityEntryMap";
declare class EntityManager {
    private static entities;
    static All(): EntityEntryMap;
    static Get(entityId: string): AbstractEntity | undefined;
    static Add(entity: AbstractEntity, handler: Function, rclass: ClassType): AbstractEntity;
    static Remove(entityId: string): void;
    private static MergeEntities;
}
export default EntityManager;
//# sourceMappingURL=EntityManager.d.ts.map