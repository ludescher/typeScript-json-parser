import TokenType from "../Enum/TokenType";
class BooleanTokenType {
    constructor() {
        this.type = TokenType.Boolean;
        this.regex = /^TRUE|^true|^FALSE|^false/;
        this.match = 0;
    }
}
export default BooleanTokenType;
//# sourceMappingURL=BooleanTokenType.js.map