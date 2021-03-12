import IToken from "./Interface/IToken";
import TokenType from "./Enum/TokenType";
import ITokenType from "./Interface/ITokenType";
import BooleanTokenType from "./Entity/BooleanTokenType";
import ColonTokenType from "./Entity/ColonTokenType";
import CommaTokenType from "./Entity/CommaTokenType";
import EndArrayTokenType from "./Entity/EndArrayTokenType";
import EndObjectTokenType from "./Entity/EndObjectTokenType";
import NullTokenType from "./Entity/NullTokenType";
import NumberTokenType from "./Entity/NumberTokenType";
import WhitespaceTokenType from "./Entity/WhitespaceTokenType";
import StringTokenType from "./Entity/StringTokenType";
import StartObjectTokenType from "./Entity/StartObjectTokenType";
import StartArrayTokenType from "./Entity/StartArrayTokenType";

const REGISTERED_TOKEN_TYPES: Array<ITokenType> = [
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

function Parse(input: string): Object | Array<Object> | null {
    const TOKENS: IToken[] = [];

    let _cursor = 0;

    while (_cursor < input.length) {

        const CURRENT = input.substring(_cursor);

        for (let i = 0; i < REGISTERED_TOKEN_TYPES.length; i++) {

            const TOKEN_TYPE: ITokenType = REGISTERED_TOKEN_TYPES[i];
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