import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";

class EndObjectTokenType implements ITokenType {
    type: TokenType = TokenType.EndObject;
    regex: RegExp = /^}/;
    match: number = 0;
}

export default EndObjectTokenType;