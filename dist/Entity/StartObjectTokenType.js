import TokenType from "../Enum/TokenType";
class StartObjectTokenType {
    constructor() {
        this.type = TokenType.StartObject;
        this.regex = /^{/;
        this.match = 0;
    }
}
export default StartObjectTokenType;
//# sourceMappingURL=StartObjectTokenType.js.map