import TokenType from "../Enum/TokenType";
class EndObjectTokenType {
    constructor() {
        this.type = TokenType.EndObject;
        this.regex = /^}/;
        this.match = 0;
    }
}
export default EndObjectTokenType;
//# sourceMappingURL=EndObjectTokenType.js.map