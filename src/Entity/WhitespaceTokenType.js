import TokenType from "../Enum/TokenType";
class WhitespaceTokenType {
    constructor() {
        this.type = TokenType.Whitespace;
        this.regex = /^\s+/;
        this.match = 0;
    }
}
export default WhitespaceTokenType;
//# sourceMappingURL=WhitespaceTokenType.js.map