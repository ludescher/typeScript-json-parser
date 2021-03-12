import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";

class BooleanTokenType implements ITokenType {
    type: TokenType = TokenType.Boolean;
    regex: RegExp = /^TRUE|^true|^FALSE|^false/;
}

export default BooleanTokenType;