import TokenType from "../Enum/TokenType";
class CommaTokenType {
    constructor() {
        this.type = TokenType.Comma;
        this.regex = /^,/;
        this.match = 0;
    }
}
export default CommaTokenType;
//# sourceMappingURL=CommaTokenType.js.map