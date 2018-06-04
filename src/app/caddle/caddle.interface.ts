import { MilkProductions } from "../milk-production/milk-productions.interface";

export interface Caddle {
    id: string;
    name: string;
    number: number;
    birthDate: Date;
    gender: string;
    weight: number;
    milkProductions: MilkProductions     
}
