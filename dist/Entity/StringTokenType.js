import TokenType from "../Enum/TokenType";
class StringTokenType {
    constructor() {
        this.type = TokenType.String;
        this.regex = /^(["'])((?:[^\1\\]|\\.)*?)\1/;
        this.match = 2;
    }
}
export default StringTokenType;
//# sourceMappingURL=StringTokenType.js.map