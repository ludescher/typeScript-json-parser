import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";
declare class WhitespaceTokenType implements ITokenType {
    type: TokenType;
    regex: RegExp;
    match: number;
}
export default WhitespaceTokenType;
//# sourceMappingURL=WhitespaceTokenType.d.ts.map