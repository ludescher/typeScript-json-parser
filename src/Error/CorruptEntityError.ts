class CorruptEntityError extends Error {
    override message: string = "Prop entityId is not set!";
}

export default CorruptEntityError;