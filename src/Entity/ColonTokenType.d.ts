import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";
declare class ColonTokenType implements ITokenType {
    type: TokenType;
    regex: RegExp;
    match: number;
}
export default ColonTokenType;
//# sourceMappingURL=ColonTokenType.d.ts.map