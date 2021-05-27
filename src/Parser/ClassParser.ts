import ITokenType from "../Interface/ITokenType";
import ClassManager from "../Manager/ClassManager";
import ClassType from "../Type/ClassType";
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
import AbstractEntity from "../Abstract/AbstractEntity";
import TokenType from "../Enum/TokenType";
import TokenGeneratorType from "../Type/TokenGeneratorType";

const REGISTERED_TOKEN_TYPES: ITokenType[] = [
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

function parseAsClass(entity_identifier: string, json_string: string): AbstractEntity | AbstractEntity[] | null {
    const RCLASS: ClassType | null = ClassManager.GetRegisteredClass(entity_identifier);

    if (RCLASS === null) {
        return null;
    }

    const PARSER = FetchToken(json_string);

    let token = PARSER.next();

    console.log("First: ", token);

    if (token.value?.type === TokenType.StartObject) {
        return ParseObject(PARSER, RCLASS);
    } else if (token.value?.type === TokenType.StartArray) {
        return ParseArray(PARSER, RCLASS);
    }

    throw new Error("Invalid json!");
}

function ParseObject(parser: TokenGeneratorType, rclass: ClassType): AbstractEntity {
    const ENTITY: AbstractEntity = new rclass();

    let token = parser.next();

    while (token.done === false) {

        console.log(token.value);

        token = parser.next();
    }

    console.log("Final: ", token);

    return ENTITY;
}

function ParseArray(parser: TokenGeneratorType, rclass: ClassType): AbstractEntity[] {
    const RESULT: AbstractEntity[] = [];


    return RESULT;
}

function* FetchToken(json_string: string): TokenGeneratorType {
    let cursor: number = 0;
    const STR_LENGTH = json_string.length;

    while (cursor < STR_LENGTH) {
        const CURRENT_INPUT: string = json_string.substring(cursor);

        for (let i = 0; i < REGISTERED_TOKEN_TYPES.length; i++) {

            const TOKEN_TYPE: ITokenType = REGISTERED_TOKEN_TYPES[i];
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