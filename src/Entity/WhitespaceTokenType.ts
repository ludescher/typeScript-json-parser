import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";

class WhitespaceTokenType implements ITokenType {
    type: TokenType = TokenType.Whitespace;
    regex: RegExp = /^\s*/;
    match: number = 0;
}

export default WhitespaceTokenType;