import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";
declare class StartArrayTokenType implements ITokenType {
    type: TokenType;
    regex: RegExp;
    match: number;
}
export default StartArrayTokenType;
//# sourceMappingURL=StartArrayTokenType.d.ts.map