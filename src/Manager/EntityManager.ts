import AbstractEntity from "../Abstract/AbstractEntity";
import EntityEntryMap from "../Type/EntityEntryMap";

class EntityManager {
    private static entities: EntityEntryMap = new Map();

    static All(): EntityEntryMap {
        return this.entities;
    }

    static Get(entityId: string): AbstractEntity | undefined {
        return this.entities.get(entityId);
    }

    static Add(entity: AbstractEntity): void {
        if (entity.entityId !== null && entity.entityId !== undefined) {
            this.entities.set(entity.entityId, entity);
        }
    }

    static Remove(entityId: string): void {
        this.entities.delete(entityId);
    }
}

export default EntityManager;