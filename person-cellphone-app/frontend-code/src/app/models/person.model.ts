import { CellPhone } from "./cellphone.model";

export interface Person {
    id?: string;
    firstName: string;
    lastName: string;
    age: number;
    cellPhone?: CellPhone;
}
