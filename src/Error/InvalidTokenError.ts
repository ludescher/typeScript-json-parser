class InvalidTokenError extends Error {
    override message: string = "Invalid token!";
}

export default InvalidTokenError;