import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";

class StartObjectTokenType implements ITokenType {
    type: TokenType = TokenType.StartObject;
    regex: RegExp = /^{/;
    match: number = 0;
}

export default StartObjectTokenType;