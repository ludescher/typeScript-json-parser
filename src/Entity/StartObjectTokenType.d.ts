import TokenType from "../Enum/TokenType";
import ITokenType from "../Interface/ITokenType";
declare class StartObjectTokenType implements ITokenType {
    type: TokenType;
    regex: RegExp;
    match: number;
}
export default StartObjectTokenType;
//# sourceMappingURL=StartObjectTokenType.d.ts.map