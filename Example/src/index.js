import { parseAsClass, ClassManager, EntityManager } from 'typescript-json-parser';
import User from './Entity/User';
import Company from './Entity/Company';
import Task from './Entity/Task';
import Vehicle from './Entity/Vehicle';

ClassManager.RegisterClass(User);
ClassManager.RegisterClass(Company);
ClassManager.RegisterClass(Task);
ClassManager.RegisterClass(Vehicle);

const TEST_DATA = '{"id": 1,"created": 1617291318,"modified": 1617291318,"name": "Test Company","employees": [{"id": 11,"roles": ["ROLE_DRIVER"],"firstname": "Franz","lastname": "Josef","email": "franz.j@company.com","active": true,"company": {"id": 1}},{"id": 12}],"vehicles": [{"id": 21,"brand": "Man","model": "TGX","licenceplate": "D M-AN 0001","color": "blue"},{"id": 22,"brand": "Man","model": "TGX","licenceplate": "D M-AN 0005","color": "green"},{"id": 23}],"tasks": [{"id": 31,"address": "MAN Truck & Bus Deutschland GmbH, Max-Eyth-Straße, Neuenstein, Germany","payload": "500 pizzas (lunch)","driver": {"id": 11},"vehicle": {"id": 22}},{"id": 32,"address": "Allianz Arena, Werner-Heisenberg-Allee, Munich, Bayern, Germany","payload": "Staff, youth players as well as equipment.","driver": {"id": 12,"roles": ["ROLE_DRIVER"],"firstname": "Peter","lastname": "Panzer","email": "peter.p@company.com","active": true,"company": {"id": 1}},"vehicle": {"id": 23,"brand": "Man","model": "eTGE","licenceplate": "D M-AN 0012","color": "red"}}]}';

/** @type {Company} COMPANY */
const COMPANY = parseAsClass(Company.EntityIdentifier, TEST_DATA);

console.log(COMPANY);

for (let i = 0; i < COMPANY.tasks.length; i++) {
    console.log(COMPANY.tasks[i].vehicle);
    
}

console.log(EntityManager.All());