enum TokenType {

    /**
     * Indicates that the token type is a Whitespace character.
     */
    Whitespace = 'Whitespace',

    /**
     * Indicates that the token type is the start of a JSON object.
     */
    StartObject = 'StartObject',

    /**
     * Indicates that the token type is the end of a JSON object.
     */
    EndObject = 'EndObject',

    /**
     * Indicates that the token type is the start of a JSON array.
     */
    StartArray = 'StartArray',

    /**
     * Indicates that the token type is the end of a JSON array.
     */
    EndArray = 'EndArray',

    /**
     * Indicates that the previous token type is a property name.
     */
    Colon = 'Colon',

    /**
     * Indicates that the next token type is a property name.
     */
    Comma = 'Comma',

    /**
     * Indicates that the token type is a JSON string.
     */
    String = 'String',

    /**
     * Indicates that the token type is a JSON number.
     */
    Number = 'Number',

    /**
     * Indicates that the token type is a JSON boolean.
     */
     Boolean = 'Boolean',

    /**
     * Indicates that the token type is the JSON literal "null".
     */
    Null = 'Null',
}

export default TokenType;