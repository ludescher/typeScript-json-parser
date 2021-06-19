class InvalidClassError extends Error {
    override message: string = "Trying to parse a non existing class!";

    constructor(classname: string | undefined = undefined) {
        super();
        if (classname !== undefined) {
            this.message = `Trying to parse a non existing class "${classname}"!`;
        }
    }
}

export default InvalidClassError;