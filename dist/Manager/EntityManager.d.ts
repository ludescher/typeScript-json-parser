import AbstractEntity from "../Abstract/AbstractEntity";
import EntityEntryMap from "../Type/EntityEntryMap";
declare class EntityManager {
    private static entities;
    static All(): EntityEntryMap;
    static Get(entityId: string): AbstractEntity | undefined;
    static Add(entity: AbstractEntity): void;
    static Remove(entityId: string): void;
}
export default EntityManager;
//# sourceMappingURL=EntityManager.d.ts.map