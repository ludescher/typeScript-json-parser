import IClassEntry from "../Interface/IClassEntry";
import ClassType from "../Type/ClassType";

class ClassManager {
    private static classes: IClassEntry = {};

    static RegisterClass(rclass: ClassType): void {
        if (!(rclass.EntityIdentifier in this.classes)) {
            this.classes[rclass.EntityIdentifier] = rclass;
        }
    }

    static UnregisterClass(entity_identifier: string): void {
        if (entity_identifier in this.classes) {
            delete this.classes[entity_identifier];
        }
    }

    static ClassIsRegistered(entity_identifier: string): boolean {
        if (entity_identifier in this.classes) {
            return true;
        }
        return false;
    }

    static GetRegisteredClass(entity_identifier: string): ClassType | null {
        if (entity_identifier in this.classes) {
            return this.classes[entity_identifier];
        }
        return null;
    }
}

export default ClassManager;