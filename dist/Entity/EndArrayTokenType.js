import TokenType from "../Enum/TokenType";
class EndArrayTokenType {
    constructor() {
        this.type = TokenType.EndArray;
        this.regex = /^\]/;
        this.match = 0;
    }
}
export default EndArrayTokenType;
//# sourceMappingURL=EndArrayTokenType.js.map