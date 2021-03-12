import BooleanTokenType from "./Entity/BooleanTokenType.js";
import ColonTokenType from "./Entity/ColonTokenType.js";
import CommaTokenType from "./Entity/CommaTokenType.js";
import EndArrayTokenType from "./Entity/EndArrayTokenType.js";
import EndObjectTokenType from "./Entity/EndObjectTokenType.js";
import NullTokenType from "./Entity/NullTokenType.js";
import NumberTokenType from "./Entity/NumberTokenType.js";
import WhitespaceTokenType from "./Entity/WhitespaceTokenType.js";
import StringTokenType from "./Entity/StringTokenType.js";
import StartObjectTokenType from "./Entity/StartObjectTokenType.js";
import StartArrayTokenType from "./Entity/StartArrayTokenType.js";
const REGISTERED_TOKEN_TYPES = [
    new BooleanTokenType(),
    new ColonTokenType(),
    new CommaTokenType(),
    new EndArrayTokenType(),
    new EndObjectTokenType(),
    new NullTokenType(),
    new NumberTokenType(),
    new StartArrayTokenType(),
    new StartObjectTokenType(),
    new StringTokenType(),
    new WhitespaceTokenType(),
];
function Parse(input) {
    const TOKENS = [];
    let _cursor = 0;
    while (_cursor < input.length) {
        const CURRENT = input.substring(_cursor);
        for (let i = 0; i < REGISTERED_TOKEN_TYPES.length; i++) {
            const TOKEN_TYPE = REGISTERED_TOKEN_TYPES[i];
            const REGEX_RESULT = TOKEN_TYPE.regex.exec(CURRENT);
            if (REGEX_RESULT !== null) {
                _cursor += REGEX_RESULT[TOKEN_TYPE.match].length;
                TOKENS.push({
                    type: TOKEN_TYPE.type,
                    value: REGEX_RESULT[TOKEN_TYPE.match],
                });
            }
        }
    }
    return TOKENS;
}
export default Parse;
//# sourceMappingURL=Parse.js.map