import AbstractEntity from "../Abstract/AbstractEntity";
import IEntityEntry from "../Interface/IEntityEntry";
declare class EntityManager {
    private static entities;
    static All(): IEntityEntry;
    static Get(entityId: string): AbstractEntity | undefined;
    static Add(entity: AbstractEntity): void;
    static Remove(entityId: string): void;
}
export default EntityManager;
//# sourceMappingURL=EntityManager.d.ts.map