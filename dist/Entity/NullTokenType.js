import TokenType from "../Enum/TokenType";
class NullTokenType {
    constructor() {
        this.type = TokenType.Null;
        this.regex = /^NULL|^null/;
        this.match = 0;
    }
}
export default NullTokenType;
//# sourceMappingURL=NullTokenType.js.map