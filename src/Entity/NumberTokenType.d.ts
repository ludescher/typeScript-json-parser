import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";
declare class NumberTokenType implements ITokenType {
    type: TokenType;
    regex: RegExp;
    match: number;
}
export default NumberTokenType;
//# sourceMappingURL=NumberTokenType.d.ts.map