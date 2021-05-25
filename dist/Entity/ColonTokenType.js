import TokenType from "../Enum/TokenType";
class ColonTokenType {
    constructor() {
        this.type = TokenType.Colon;
        this.regex = /^:/;
        this.match = 0;
    }
}
export default ColonTokenType;
//# sourceMappingURL=ColonTokenType.js.map