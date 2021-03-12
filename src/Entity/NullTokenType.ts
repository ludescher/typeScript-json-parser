import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";

class NullTokenType implements ITokenType {
    type: TokenType = TokenType.Null;
    regex: RegExp = /^NULL|^null/;
    match: number = 0;
}

export default NullTokenType;