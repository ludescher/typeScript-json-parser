class InvalidClassError extends Error {
    constructor(classname = undefined) {
        super();
        this.message = "Trying to parse a non existing class!";
        if (classname !== undefined) {
            this.message = `Trying to parse a non existing class "${classname}"!`;
        }
    }
}
export default InvalidClassError;
//# sourceMappingURL=InvalidClassError.js.map