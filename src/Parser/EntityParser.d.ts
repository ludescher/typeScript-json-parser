declare class EntityParser {
    private _entity;
    private _input;
    private _cursor;
    private _token;
    private _last_valuetype;
    constructor(entity: any, input: string);
    PARSE(): Object | Array<Object> | null;
    private HandleObject;
    private HandleArray;
    private FetchToken;
    private GetValueType;
    private GetValueTypeByTokenType;
    private ConvertValue;
}
export default EntityParser;
//# sourceMappingURL=EntityParser.d.ts.map