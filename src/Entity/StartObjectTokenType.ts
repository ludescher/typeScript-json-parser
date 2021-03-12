import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";

class StartObjectTokenType implements ITokenType {
    type: TokenType = TokenType.StartObject;
    regex: RegExp = /^{/;
}

export default StartObjectTokenType;