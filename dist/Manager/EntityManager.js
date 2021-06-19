class EntityManager {
    static All() {
        return this.entities;
    }
    static Get(entityId) {
        return this.entities.get(entityId);
    }
    static Add(entity) {
        if (entity.entityId !== null && entity.entityId !== undefined) {
            this.entities.set(entity.entityId, entity);
        }
    }
    static Remove(entityId) {
        this.entities.delete(entityId);
    }
}
EntityManager.entities = new Map();
export default EntityManager;
//# sourceMappingURL=EntityManager.js.map