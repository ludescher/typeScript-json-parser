import TokenType from "../Enum/TokenType";
class NumberTokenType {
    constructor() {
        this.type = TokenType.Number;
        this.regex = /^\d+(?:\.\d+)?/;
        this.match = 0;
    }
}
export default NumberTokenType;
//# sourceMappingURL=NumberTokenType.js.map