import ClassManager from "../Manager/ClassManager";
import ClassType from "../Type/ClassType";

function parseAsClass(entity_identifier: string, jsonstring: string): object | object[] | null {
    const RCLASS: ClassType | null = ClassManager.GetRegisteredClass(entity_identifier);

    if (RCLASS === null) {
        return null;
    }

    const gen = Parser(10);

    console.log(gen.next().value);
    // expected output: 10

    console.log(gen.next().value);
    // expected output: 20


    return { class: RCLASS, jsonstring, test: new RCLASS() };

}

function* Parser(i: number): Generator<any, any, any> {
    yield i;
    yield i + 10;
}

export default parseAsClass;