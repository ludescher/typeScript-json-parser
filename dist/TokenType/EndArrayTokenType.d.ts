import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";
declare class EndArrayTokenType implements ITokenType {
    type: TokenType;
    regex: RegExp;
    match: number;
}
export default EndArrayTokenType;
//# sourceMappingURL=EndArrayTokenType.d.ts.map