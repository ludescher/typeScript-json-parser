import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";
declare class NullTokenType implements ITokenType {
    type: TokenType;
    regex: RegExp;
    match: number;
}
export default NullTokenType;
//# sourceMappingURL=NullTokenType.d.ts.map