import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";
declare class BooleanTokenType implements ITokenType {
    type: TokenType;
    regex: RegExp;
    match: number;
}
export default BooleanTokenType;
//# sourceMappingURL=BooleanTokenType.d.ts.map