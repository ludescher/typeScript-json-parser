class InvalidTokenError extends Error {
    constructor() {
        super(...arguments);
        this.message = "Invalid token!";
    }
}
export default InvalidTokenError;
//# sourceMappingURL=InvalidTokenError.js.map