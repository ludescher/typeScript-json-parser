import SupportedType from "../Enum/SupportedType";
import CorruptEntityError from "../Error/CorruptEntityError";
class EntityManager {
    static All() {
        return this.entities;
    }
    static Get(entityId) {
        return this.entities.get(entityId);
    }
    static Add(entity, handler, rclass) {
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
        }
        else {
            this.MergeEntities(entity, rclass);
            return this.entities.get(entity.entityId);
        }
    }
    static Remove(entityId) {
        this.entities.delete(entityId);
    }
    static MergeEntities(entity, rclass) {
        const TEMP_ENTITY_PROXY = this.entities.get(entity.entityId);
        for (const PROP in entity) {
            if (PROP === "entityId") {
                continue;
            }
            if (entity[PROP] === null) {
                continue;
            }
            if (entity[PROP] === undefined) {
                continue;
            }
            const TYPE = rclass.TypeMap[PROP];
            if (TYPE === SupportedType.Array) {
                if (entity[PROP].length === 0) {
                    continue;
                }
            }
            if (TYPE === SupportedType.ArrayRelation) {
                if (entity[PROP].length === 0) {
                    continue;
                }
            }
            TEMP_ENTITY_PROXY[PROP] = entity[PROP];
        }
        this.entities.set(entity.entityId, TEMP_ENTITY_PROXY);
    }
}
EntityManager.entities = new Map();
export default EntityManager;
//# sourceMappingURL=EntityManager.js.map