import ClassEntryMap from "../Type/ClassEntryMap";
import ClassType from "../Type/ClassType";

class ClassManager {
    private static classes: ClassEntryMap = new Map();

    static RegisterClass(rclass: ClassType): void {
        if (this.classes.has(rclass.EntityIdentifier) === false) {
            this.classes.set(rclass.EntityIdentifier, rclass);
        }
    }

    static UnregisterClass(entity_identifier: string): void {
        this.classes.delete(entity_identifier);
    }

    static ClassIsRegistered(entity_identifier: string): boolean {
        return this.classes.has(entity_identifier);
    }

    static GetRegisteredClass(entity_identifier: string): ClassType | undefined {
        return this.classes.get(entity_identifier);
    }
}

export default ClassManager;