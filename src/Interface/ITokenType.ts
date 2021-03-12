import TokenType from "../Enum/TokenType";

interface ITokenType {
    type: TokenType;
    regex: RegExp;
}

export default ITokenType;