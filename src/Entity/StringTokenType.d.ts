import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";
declare class StringTokenType implements ITokenType {
    type: TokenType;
    regex: RegExp;
    match: number;
}
export default StringTokenType;
//# sourceMappingURL=StringTokenType.d.ts.map