import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";

class EndObjectTokenType implements ITokenType {
    type: TokenType = TokenType.EndObject;
    regex: RegExp = /^}/;
}

export default EndObjectTokenType;