import TokenType from "../Enum/TokenType";

interface IExpression {
    [regex: string]: TokenType;
}

export default IExpression;