class CorruptEntityError extends Error {
    constructor() {
        super(...arguments);
        this.message = "Prop entityId is not set!";
    }
}
export default CorruptEntityError;
//# sourceMappingURL=CorruptEntityError.js.map