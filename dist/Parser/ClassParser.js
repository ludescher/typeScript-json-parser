import ClassManager from "../Manager/ClassManager";
function parseAsClass(entity_identifier, jsonstring) {
    const RCLASS = ClassManager.GetRegisteredClass(entity_identifier);
    if (RCLASS === null) {
        return null;
    }
    const gen = Parser(10);
    console.log(gen.next().value);
    console.log(gen.next().value);
    return { class: RCLASS, jsonstring, test: new RCLASS() };
}
function* Parser(i) {
    yield i;
    yield i + 10;
}
export default parseAsClass;
//# sourceMappingURL=ClassParser.js.map