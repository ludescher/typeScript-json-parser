import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";

class CommaTokenType implements ITokenType {
    type: TokenType = TokenType.Comma;
    regex: RegExp = /^,/;
}

export default CommaTokenType;