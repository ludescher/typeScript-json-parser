class ClassManager {
    static RegisterClass(rclass) {
        if (this.classes.has(rclass.EntityIdentifier) === false) {
            this.classes.set(rclass.EntityIdentifier, rclass);
        }
    }
    static UnregisterClass(entity_identifier) {
        this.classes.delete(entity_identifier);
    }
    static ClassIsRegistered(entity_identifier) {
        return this.classes.has(entity_identifier);
    }
    static GetRegisteredClass(entity_identifier) {
        return this.classes.get(entity_identifier);
    }
}
ClassManager.classes = new Map();
export default ClassManager;
//# sourceMappingURL=ClassManager.js.map