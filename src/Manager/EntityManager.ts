import AbstractEntity from "../Abstract/AbstractEntity";
import IEntityEntry from "../Interface/IEntityEntry";

class EntityManager {
    private static entities: IEntityEntry = {};

    static All(): IEntityEntry {
        return this.entities;
    }

    static Get(entityId: string): AbstractEntity | undefined {
        return this.entities[entityId];
    }

    static Add(entity: AbstractEntity): void {
        if (entity.entityId !== null && entity.entityId !== undefined) {
            this.entities[entity.entityId] = entity;
        }
    }

    static Remove(entityId: string): void {
        delete this.entities[entityId];
    }
}

export default EntityManager;