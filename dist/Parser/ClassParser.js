import ClassManager from "../Manager/ClassManager";
import BooleanTokenType from "../TokenType/BooleanTokenType";
import ColonTokenType from "../TokenType/ColonTokenType";
import CommaTokenType from "../TokenType/CommaTokenType";
import EndArrayTokenType from "../TokenType/EndArrayTokenType";
import EndObjectTokenType from "../TokenType/EndObjectTokenType";
import NullTokenType from "../TokenType/NullTokenType";
import NumberTokenType from "../TokenType/NumberTokenType";
import WhitespaceTokenType from "../TokenType/WhitespaceTokenType";
import StringTokenType from "../TokenType/StringTokenType";
import StartObjectTokenType from "../TokenType/StartObjectTokenType";
import StartArrayTokenType from "../TokenType/StartArrayTokenType";
import TokenType from "../Enum/TokenType";
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
function parseAsClass(entity_identifier, json_string) {
    var _a, _b;
    const RCLASS = ClassManager.GetRegisteredClass(entity_identifier);
    if (RCLASS === null) {
        return null;
    }
    const PARSER = FetchToken(json_string);
    let token = PARSER.next();
    console.log("First: ", token);
    if (((_a = token.value) === null || _a === void 0 ? void 0 : _a.type) === TokenType.StartObject) {
        return ParseObject(PARSER, RCLASS);
    }
    else if (((_b = token.value) === null || _b === void 0 ? void 0 : _b.type) === TokenType.StartArray) {
        return ParseArray(PARSER, RCLASS);
    }
    throw new Error("Invalid json!");
}
function ParseObject(parser, rclass) {
    const ENTITY = new rclass();
    let token = parser.next();
    while (token.done === false) {
        console.log(token.value);
        token = parser.next();
    }
    console.log("Final: ", token);
    return ENTITY;
}
function ParseArray(parser, rclass) {
    const RESULT = [];
    return RESULT;
}
function* FetchToken(json_string) {
    let cursor = 0;
    const STR_LENGTH = json_string.length;
    while (cursor < STR_LENGTH) {
        const CURRENT_INPUT = json_string.substring(cursor);
        for (let i = 0; i < REGISTERED_TOKEN_TYPES.length; i++) {
            const TOKEN_TYPE = REGISTERED_TOKEN_TYPES[i];
            const REGEX_RESULT = TOKEN_TYPE.regex.exec(CURRENT_INPUT);
            if (REGEX_RESULT !== null) {
                cursor += REGEX_RESULT[0].length;
                yield {
                    type: TOKEN_TYPE.type,
                    value: REGEX_RESULT[TOKEN_TYPE.match],
                };
            }
        }
    }
    return null;
}
export default parseAsClass;
//# sourceMappingURL=ClassParser.js.map