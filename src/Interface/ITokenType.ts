import TokenType from "../Enum/TokenType";

interface ITokenType {
    type: TokenType;
    regex: RegExp;
    match: number;
}

export default ITokenType;