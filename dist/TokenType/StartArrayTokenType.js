import TokenType from "../Enum/TokenType";
class StartArrayTokenType {
    constructor() {
        this.type = TokenType.StartArray;
        this.regex = /^\[/;
        this.match = 0;
    }
}
export default StartArrayTokenType;
//# sourceMappingURL=StartArrayTokenType.js.map