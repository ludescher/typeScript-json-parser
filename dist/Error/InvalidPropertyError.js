class InvalidPropertyError extends Error {
    constructor(propname = undefined) {
        super();
        this.message = "The given property does not exists!";
        if (propname !== undefined) {
            this.message = `The given property "${propname}" does not exists!`;
        }
    }
}
export default InvalidPropertyError;
//# sourceMappingURL=InvalidPropertyError.js.map