import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";

class StringTokenType implements ITokenType {
    type: TokenType = TokenType.String;
    regex: RegExp = /^(["'])((?:[^\1\\]|\\.)*?)\1/;
}

export default StringTokenType;