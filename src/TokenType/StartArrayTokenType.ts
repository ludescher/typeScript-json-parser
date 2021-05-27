import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";

class StartArrayTokenType implements ITokenType {
    type: TokenType = TokenType.StartArray;
    regex: RegExp = /^\[/;
        match: number = 0;
}

export default StartArrayTokenType;