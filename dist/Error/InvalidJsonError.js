class InvalidJsonError extends Error {
    constructor() {
        super(...arguments);
        this.message = "Invalid json!";
    }
}
export default InvalidJsonError;
//# sourceMappingURL=InvalidJsonError.js.map