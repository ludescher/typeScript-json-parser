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
import InvalidTokenError from "../Error/InvalidTokenError";
import InvalidJsonError from "../Error/InvalidJsonError";
import PropertyValue from "../Entity/PropertyValue";
import InvalidClassError from "../Error/InvalidClassError";

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
        throw new InvalidClassError(entity_identifier);
    }

    const PARSER = FetchToken(json_string);

    let iterator_result = PARSER.next();

    if (iterator_result.value?.type === TokenType.StartObject) {
        return ParseObject(PARSER, RCLASS);
    } else if (iterator_result.value?.type === TokenType.StartArray) {
        return ParseArray(PARSER, RCLASS);
    }

    throw new InvalidJsonError();
}

function ParseObject(parser: TokenGeneratorType, rclass: ClassType): AbstractEntity {
    const ENTITY: AbstractEntity = new rclass();

    let iterator_result = parser.next();

    if (iterator_result.value === null) {
        throw new InvalidTokenError();
    }

    let temp: PropertyValue = new PropertyValue();

    while (iterator_result.done === false) {
        switch (iterator_result.value.type) {
            case TokenType.Whitespace:
                break;
            case TokenType.StartObject:
                if (temp.property === undefined) {
                    throw new InvalidJsonError();
                }

                const CHILD_ENTITY_IDENTIFIER: string = rclass.TypeMap[temp.property]; // TODO => parse Array<@orders> to @orders

                const RCLASS: ClassType | null = ClassManager.GetRegisteredClass(CHILD_ENTITY_IDENTIFIER);

                if (RCLASS === null) {
                    throw new InvalidClassError(CHILD_ENTITY_IDENTIFIER);
                }

                temp.value = ParseObject(parser, RCLASS);

                break;
            case TokenType.EndObject:
                return ENTITY;
                break;
            case TokenType.StartArray:
                throw new Error("TODO");
                break;
            case TokenType.EndArray:
                break;
            case TokenType.Colon:
                break;
            case TokenType.Comma:
                break;
            case TokenType.String:
                if (temp.property === undefined) {
                    temp.property = iterator_result.value.value;
                } else {
                    temp.value = iterator_result.value.value;
                }
                break;
            case TokenType.Number:
                temp.value = iterator_result.value.value;
                break;
            case TokenType.Boolean:
                temp.value = iterator_result.value.value;
                break;
            case TokenType.Null:
                temp.value = iterator_result.value.value;
                break;
            default:
                throw new InvalidTokenError();
        }

        if (temp.property !== undefined && temp.value !== undefined) {
            // @ts-ignore
            ENTITY[temp.property] = temp.value; // TODO => convert value into actual type
            temp.value = undefined;
            temp.property = undefined;
        }

        iterator_result = parser.next();
    }

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