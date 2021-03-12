import BooleanTokenType from "./Entity/BooleanTokenType.js";
const EXPRESSIONS = [
    new BooleanTokenType(),
];
function Parse(input) {
    const RESULT = [];
    let _cursor = 0;
    let _test = 0;
    while (_cursor < input.length) {
        const CURRENT = input.substring(_cursor);
        for (let i = 0; i < EXPRESSIONS.length; i++) {
            console.log(EXPRESSIONS[i]);
        }
        _test++;
        if (_test > 1000) {
            break;
        }
    }
    return RESULT;
}
export default Parse;
//# sourceMappingURL=Parse.js.map