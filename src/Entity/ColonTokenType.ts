import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";

class ColonTokenType implements ITokenType {
    type: TokenType = TokenType.Colon;
    regex: RegExp = /^:/;
}

export default ColonTokenType;