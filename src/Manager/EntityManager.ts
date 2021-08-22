import AbstractEntity from "../Abstract/AbstractEntity";
import SupportedType from "../Enum/SupportedType";
import CorruptEntityError from "../Error/CorruptEntityError";
import ClassType from "../Type/ClassType";
import EntityEntryMap from "../Type/EntityEntryMap";

class EntityManager {
    private static entities: EntityEntryMap = new Map();

    static All(): EntityEntryMap {
        return this.entities;
    }

    static Get(entityId: string): AbstractEntity | undefined {
        return this.entities.get(entityId);
    }

    static Add(entity: AbstractEntity, handler: Function, rclass: ClassType): AbstractEntity {
        if (entity.entityId === null) {
            throw new CorruptEntityError();
        }

        if (entity.entityId === undefined) {
            throw new CorruptEntityError();
        }

        if (this.entities.has(entity.entityId) === false) {
            const PROXY = new Proxy(entity, handler);
            this.entities.set(entity.entityId, PROXY);
            return PROXY;
        } else {
            this.MergeEntities(entity, rclass);
            // @ts-ignore
            return this.entities.get(entity.entityId);
        }
    }

    static Remove(entityId: string): void {
        this.entities.delete(entityId);
    }

    private static MergeEntities(entity: AbstractEntity, rclass: ClassType): void {
        // @ts-ignore
        const TEMP_ENTITY_PROXY: AbstractEntity = this.entities.get(entity.entityId);

        for (const PROP in entity) {
            if (PROP === "entityId") {
                continue;
            }

            // @ts-ignore
            if (entity[PROP] === null) {
                continue;
            }

            // @ts-ignore
            if (entity[PROP] === undefined) {
                continue;
            }

            const TYPE: SupportedType = rclass.TypeMap[PROP];

            if (TYPE === SupportedType.Array) {
                // @ts-ignore
                if (entity[PROP].length === 0) {
                    continue;
                }
            }

            if (TYPE === SupportedType.ArrayRelation) {
                // @ts-ignore
                if (entity[PROP].length === 0) {
                    continue;
                }
            }

            // @ts-ignore
            TEMP_ENTITY_PROXY[PROP] = entity[PROP];
        }

        // @ts-ignore
        this.entities.set(entity.entityId, TEMP_ENTITY_PROXY);
    }
}

export default EntityManager;