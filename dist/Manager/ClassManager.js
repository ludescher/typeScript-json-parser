class ClassManager {
    static RegisterClass(rclass) {
        if (!(rclass.EntityIdentifier in this.classes)) {
            this.classes[rclass.EntityIdentifier] = rclass;
        }
    }
    static UnregisterClass(entity_identifier) {
        if (entity_identifier in this.classes) {
            delete this.classes[entity_identifier];
        }
    }
    static ClassIsRegistered(entity_identifier) {
        if (entity_identifier in this.classes) {
            return true;
        }
        return false;
    }
    static GetRegisteredClass(entity_identifier) {
        if (entity_identifier in this.classes) {
            return this.classes[entity_identifier];
        }
        return null;
    }
}
ClassManager.classes = {};
export default ClassManager;
//# sourceMappingURL=ClassManager.js.map