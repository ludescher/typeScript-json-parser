import IExpression from "./Interface/IExpression";
import IToken from "./Interface/IToken";
import TokenType from "./Enum/TokenType";
import ITokenType from "./Interface/ITokenType";
import BooleanTokenType from "./Entity/BooleanTokenType";

const EXPRESSIONS: Array<any> = [
    BooleanTokenType,
];

function Parse(input: string): Object | Array<Object> | null {
    const RESULT: IToken[] = [];

    let _cursor = 0;

    let _test = 0;

    while (_cursor < input.length) {
        const CURRENT = input.substring(_cursor);

        for (let i = 0; i < EXPRESSIONS.length; i++) {
            console.log(EXPRESSIONS[i]);
        }

        for (const REGEX in EXPRESSIONS) {
            const TEMP = (new RegExp(REGEX)).exec(CURRENT);

            if (TEMP.length > 0) {
                console.log(TEMP[0]);
                _cursor += TEMP[0].length;
            }
        }

        _test++;

        if (_test > 1000) {
            break;
        }
    }

    return RESULT;
}

export default Parse;