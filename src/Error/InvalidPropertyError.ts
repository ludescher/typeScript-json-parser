class InvalidPropertyError extends Error {
    override message: string = "The given property does not exists!";

    constructor(propname: string | undefined = undefined) {
        super();
        if (propname !== undefined) {
            this.message = `The given property "${propname}" does not exists!`;
        }
    }
}

export default InvalidPropertyError;