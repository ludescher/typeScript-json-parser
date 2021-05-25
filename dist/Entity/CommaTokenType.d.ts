import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";
declare class CommaTokenType implements ITokenType {
    type: TokenType;
    regex: RegExp;
    match: number;
}
export default CommaTokenType;
//# sourceMappingURL=CommaTokenType.d.ts.map