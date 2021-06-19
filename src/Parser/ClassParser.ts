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
import TokenGenerator from "../Type/TokenGenerator";
import InvalidTokenError from "../Error/InvalidTokenError";
import InvalidJsonError from "../Error/InvalidJsonError";
import PropertyValue from "../Entity/PropertyValue";
import InvalidClassError from "../Error/InvalidClassError";
import SupportedType from "../Enum/SupportedType";
import MissingFeatureError from "../Error/MissingFeatureError";
import EntityManager from "../Manager/EntityManager";

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

function parseAsClass(entity_identifier: string, json_string: string): AbstractEntity | any[] | null {
    const RCLASS: ClassType | undefined = ClassManager.GetRegisteredClass(entity_identifier);

    if (RCLASS === undefined) {
        throw new InvalidClassError(entity_identifier);
    }

    const PARSER = FetchToken(json_string);

    let iterator_result = PARSER.next();

    if (iterator_result.value?.type === TokenType.StartObject) {
        return ParseObject(PARSER, RCLASS, false);
    } else if (iterator_result.value?.type === TokenType.StartArray) {
        return ParseArray(PARSER, RCLASS);
    }

    throw new InvalidJsonError();
}

function ParseObject(parser: TokenGenerator, rclass: ClassType, reference: boolean = true): AbstractEntity {
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

                if (rclass.TypeMap[temp.property] === SupportedType.Relation) {
                    // @ts-ignore
                    const CHILD_ENTITY_IDENTIFIER: string = rclass.ConversionTypeMap[temp.property];

                    const RCLASS: ClassType | undefined = ClassManager.GetRegisteredClass(CHILD_ENTITY_IDENTIFIER);

                    if (RCLASS === undefined) {
                        throw new InvalidClassError(CHILD_ENTITY_IDENTIFIER);
                    }

                    temp.value = ParseObject(parser, RCLASS);
                } else {
                    throw new MissingFeatureError("Generic objects are not yet supported!");
                }

                break;
            case TokenType.EndObject:
                return ReturnParsedObject(ENTITY, rclass, reference);
                break;
            case TokenType.StartArray:
                if (temp.property === undefined) {
                    throw new InvalidJsonError();
                }

                if (rclass.TypeMap[temp.property] === SupportedType.ArrayRelation) {
                    // @ts-ignore
                    const CHILD_ENTITY_IDENTIFIER: string = rclass.ConversionTypeMap[temp.property];
                    const RCLASS: ClassType | undefined = ClassManager.GetRegisteredClass(CHILD_ENTITY_IDENTIFIER);

                    if (RCLASS === undefined) {
                        throw new InvalidClassError(CHILD_ENTITY_IDENTIFIER);
                    }

                    temp.value = ParseArray(parser, RCLASS);
                } else if (rclass.TypeMap[temp.property] === SupportedType.Array) {
                    // @ts-ignore
                    temp.value = ParseGenericArray(parser, rclass.ConversionTypeMap[temp.property]);
                } else {
                    throw new InvalidJsonError();
                }

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
                // @ts-ignore
                temp.value = ConvertValueTo(iterator_result.value.value, rclass.TypeMap[temp.property]);
                break;
            case TokenType.Boolean:
                temp.value = ConvertValueTo(iterator_result.value.value, SupportedType.Boolean);
                break;
            case TokenType.Null:
                temp.value = null;
                break;
            default:
                throw new InvalidTokenError();
        }

        if (temp.property !== undefined && temp.value !== undefined) {
            // @ts-ignore
            ENTITY[temp.property] = temp.value;

            if (rclass.UniqueIdentifier === temp.property) {
                ENTITY["entityId"] = `${rclass.EntityIdentifier}/${temp.value}`;
            }

            temp.value = undefined;
            temp.property = undefined;
        }

        iterator_result = parser.next();
    }

    return ReturnParsedObject(ENTITY, rclass, reference);
}

function ParseArray(parser: TokenGenerator, rclass: ClassType): any[] {
    const RESULT: any[] = [];

    let iterator_result = parser.next();

    if (iterator_result.value === null) {
        throw new InvalidTokenError();
    }

    while (iterator_result.done === false) {
        switch (iterator_result.value.type) {
            case TokenType.Whitespace:
                break;
            case TokenType.StartObject:
                RESULT.push(ParseObject(parser, rclass));
                break;
            case TokenType.EndObject:
                throw new InvalidJsonError();
            case TokenType.StartArray:
                RESULT.push(ParseArray(parser, rclass));
                break;
            case TokenType.EndArray:
                return RESULT;
            case TokenType.Colon:
                break;
            case TokenType.Comma:
                break;
            case TokenType.String:
                throw new InvalidJsonError();
            case TokenType.Number:
                throw new InvalidJsonError();
            case TokenType.Boolean:
                throw new InvalidJsonError();
            case TokenType.Null:
                throw new InvalidJsonError();
            default:
                throw new InvalidTokenError();
        }

        iterator_result = parser.next();
    }

    return RESULT;
}

function ParseGenericArray(parser: TokenGenerator, value_type: SupportedType): any[] {
    const RESULT: any[] = [];

    let iterator_result = parser.next();

    if (iterator_result.value === null) {
        throw new InvalidTokenError();
    }

    while (iterator_result.done === false) {
        switch (iterator_result.value.type) {
            case TokenType.Whitespace:
                break;
            case TokenType.StartObject:
                throw new MissingFeatureError("Generic objects are not yet supported!");
            case TokenType.EndObject:
                throw new InvalidJsonError();
            case TokenType.StartArray:
                throw new MissingFeatureError("Generic arrays with a depth of 2 or more are not yet supported!");
            case TokenType.EndArray:
                return RESULT;
            case TokenType.Colon:
                break;
            case TokenType.Comma:
                break;
            case TokenType.String:
                RESULT.push(iterator_result.value.value);
                break;
            case TokenType.Number:
                RESULT.push(ConvertValueTo(iterator_result.value.value, value_type));
                break;
            case TokenType.Boolean:
                RESULT.push(ConvertValueTo(iterator_result.value.value, SupportedType.Boolean));
                break;
            case TokenType.Null:
                throw new InvalidJsonError();
            default:
                throw new InvalidTokenError();
        }

        iterator_result = parser.next();
    }

    return RESULT;
}

function* FetchToken(json_string: string): TokenGenerator {
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

function ConvertValueTo(value: any, type: SupportedType): any {
    switch (type) {
        case SupportedType.Number:
            return Number(value);
        case SupportedType.Boolean:
            return (value.toLowerCase() === 'true');
        case SupportedType.Date:
            return new Date(parseInt(value) * 1000);
        default:
            return value;
    }
}

function ReturnParsedObject(entity: AbstractEntity, rclass: ClassType, reference: boolean): AbstractEntity {
    const HANDLER = {
        // @ts-ignore
        get: function (target: AbstractEntity, prop: string, receiver: AbstractEntity) {
            if (rclass.TypeMap[prop] === SupportedType.Relation) {
                // @ts-ignore
                return EntityManager.Get(Reflect.get(...arguments).entityId);
            } else if (rclass.TypeMap[prop] === SupportedType.ArrayRelation) {
                const RESULT: AbstractEntity[] = [];
                // @ts-ignore
                const TEMP_ENTITIES: AbstractEntity[] = Reflect.get(...arguments);
                for (let i = 0; i < TEMP_ENTITIES.length; i++) {
                    // @ts-ignore
                    const TEMP_ENTITY: AbstractEntity = EntityManager.Get(TEMP_ENTITIES[i].entityId);
                    if (TEMP_ENTITY !== null && TEMP_ENTITY !== undefined) {
                        RESULT.push(TEMP_ENTITY);
                    }
                }
                return RESULT;
            }

            // @ts-ignore
            return Reflect.get(...arguments);
        },
    };

    const PROXY = new Proxy(entity, HANDLER);
    EntityManager.Add(PROXY);

    if (reference === true) {
        return { entityId: PROXY.entityId };
    }
    return PROXY;
}

export default parseAsClass;