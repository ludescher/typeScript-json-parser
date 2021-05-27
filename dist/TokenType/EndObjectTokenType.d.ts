import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";
declare class EndObjectTokenType implements ITokenType {
    type: TokenType;
    regex: RegExp;
    match: number;
}
export default EndObjectTokenType;
//# sourceMappingURL=EndObjectTokenType.d.ts.map