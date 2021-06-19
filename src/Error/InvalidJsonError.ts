class InvalidJsonError extends Error {
    override message: string = "Invalid json!";
}

export default InvalidJsonError;