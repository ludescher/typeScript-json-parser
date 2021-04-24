import IValueType from "../Enum/IValueType";
import TokenType from "../Enum/TokenType";

interface IToken {
    tokentype: TokenType,
    value: string;
    valuetype: IValueType,
}

export default IToken;