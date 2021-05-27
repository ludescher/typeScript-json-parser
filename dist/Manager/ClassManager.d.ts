import ClassType from "../Type/ClassType";
declare class ClassManager {
    private static classes;
    static RegisterClass(rclass: ClassType): void;
    static UnregisterClass(entity_identifier: string): void;
    static ClassIsRegistered(entity_identifier: string): boolean;
    static GetRegisteredClass(entity_identifier: string): ClassType | null;
}
export default ClassManager;
//# sourceMappingURL=ClassManager.d.ts.map