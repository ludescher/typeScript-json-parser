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

const EXPRESSIONS: Array<ITokenType> = [
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
    const RESULT: IToken[] = [];

    let _cursor = 0;

    let _test = 0;

    while (_cursor < input.length) {
        const CURRENT = input.substring(_cursor);

        for (let i = 0; i < EXPRESSIONS.length; i++) {
            const TOKEN_TYPE: ITokenType = EXPRESSIONS[i];
            const REGEX_RESULT = TOKEN_TYPE.regex.exec(CURRENT);
            console.log(REGEX_RESULT);
        }

        // for (const REGEX in EXPRESSIONS) {
        //     const TEMP = (new RegExp(REGEX)).exec(CURRENT);

        //     if (TEMP.length > 0) {
        //         console.log(TEMP[0]);
        //         _cursor += TEMP[0].length;
        //     }
        // }

        _test++;

        if (_test > 1000) {
            break;
        }
    }

    return RESULT;
}

export default Parse;