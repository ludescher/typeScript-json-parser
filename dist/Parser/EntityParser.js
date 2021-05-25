import BooleanTokenType from "../Entity/BooleanTokenType";
import ColonTokenType from "../Entity/ColonTokenType";
import CommaTokenType from "../Entity/CommaTokenType";
import EndArrayTokenType from "../Entity/EndArrayTokenType";
import EndObjectTokenType from "../Entity/EndObjectTokenType";
import NullTokenType from "../Entity/NullTokenType";
import NumberTokenType from "../Entity/NumberTokenType";
import WhitespaceTokenType from "../Entity/WhitespaceTokenType";
import StringTokenType from "../Entity/StringTokenType";
import StartObjectTokenType from "../Entity/StartObjectTokenType";
import StartArrayTokenType from "../Entity/StartArrayTokenType";
import TokenType from "../Enum/TokenType";
import IValueType from "../Enum/IValueType";
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
class EntityParser {
    constructor(entity, input) {
        this._entity = entity;
        this._input = input;
        this._cursor = 0;
        this._token = null;
        this._last_valuetype = null;
    }
    PARSE() {
        this.FetchToken();
        if (this._token !== null) {
            if (this._token.tokentype === TokenType.StartObject) {
                return this.HandleObject();
            }
            if (this._token.tokentype === TokenType.StartArray) {
                return this.HandleArray();
            }
        }
        return null;
    }
    HandleObject() {
        const ENTITY = this._entity;
        let _result = new ENTITY();
        while (this.FetchToken()) {
            if (!this._token) {
                continue;
            }
            if (this._token.valuetype === IValueType.None) {
                continue;
            }
            if (this._token.valuetype === IValueType.Value) {
                continue;
            }
            const VALUE_TYPE = ENTITY.TypeMap[this._token.value];
            if (!VALUE_TYPE) {
                continue;
            }
            const PROP = this._token.value;
            this.FetchToken();
            if (this._token.tokentype === TokenType.Colon) {
                this.FetchToken();
            }
            const VALUE = this._token.value;
            _result[PROP] = this.ConvertValue(VALUE_TYPE, VALUE);
        }
        return _result;
    }
    HandleArray() {
        return null;
    }
    FetchToken() {
        if (this._cursor < this._input.length) {
            const CURRENT = this._input.substring(this._cursor);
            for (let i = 0; i < REGISTERED_TOKEN_TYPES.length; i++) {
                const TOKEN_TYPE = REGISTERED_TOKEN_TYPES[i];
                const REGEX_RESULT = TOKEN_TYPE.regex.exec(CURRENT);
                if (REGEX_RESULT !== null) {
                    console.log("REGEX_RESULT()", {
                        TOKEN_TYPE,
                        REGEX_RESULT,
                    });
                    this._cursor += REGEX_RESULT[0].length;
                    const VALUETYPE = this.GetValueType(TOKEN_TYPE.type);
                    this._token = {
                        tokentype: TOKEN_TYPE.type,
                        value: REGEX_RESULT[TOKEN_TYPE.match],
                        valuetype: VALUETYPE,
                    };
                    if (VALUETYPE !== IValueType.None) {
                        this._last_valuetype = VALUETYPE;
                    }
                    return true;
                }
            }
        }
        this._token = null;
        return false;
    }
    GetValueType(tokentype) {
        if (this._last_valuetype !== IValueType.Property && this._last_valuetype !== IValueType.Value) {
            console.log("GetValueType(1)", this._last_valuetype);
            return this.GetValueTypeByTokenType(tokentype, IValueType.Property);
        }
        else if (this._last_valuetype === IValueType.Property) {
            console.log("GetValueType(2)", this._last_valuetype);
            return this.GetValueTypeByTokenType(tokentype, IValueType.Value);
        }
        else if (this._last_valuetype === IValueType.Value) {
            console.log("GetValueType(3)", this._last_valuetype);
            return this.GetValueTypeByTokenType(tokentype, IValueType.Property);
        }
    }
    GetValueTypeByTokenType(tokentype, valuetype) {
        switch (tokentype) {
            case TokenType.Colon:
                return IValueType.None;
            case TokenType.Whitespace:
                return IValueType.None;
            case TokenType.StartObject:
                return IValueType.None;
            case TokenType.EndObject:
                return IValueType.None;
            case TokenType.StartArray:
                return IValueType.None;
            case TokenType.EndArray:
                return IValueType.None;
            case TokenType.Colon:
                return IValueType.None;
            case TokenType.Comma:
                return IValueType.None;
            default:
                return valuetype;
        }
    }
    ConvertValue(valueconvertername, value) {
        console.warn("ConvertValue()", valueconvertername);
        return value;
    }
}
export default EntityParser;
//# sourceMappingURL=EntityParser.js.map