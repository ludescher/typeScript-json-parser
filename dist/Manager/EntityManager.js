class EntityManager {
    static All() {
        return this.entities;
    }
    static Get(entityId) {
        return this.entities[entityId];
    }
    static Add(entity) {
        if (entity.entityId !== null && entity.entityId !== undefined) {
            this.entities[entity.entityId] = entity;
        }
    }
    static Remove(entityId) {
        delete this.entities[entityId];
    }
}
EntityManager.entities = {};
export default EntityManager;
//# sourceMappingURL=EntityManager.js.map