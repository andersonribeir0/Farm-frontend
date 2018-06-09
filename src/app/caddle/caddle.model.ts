import { MilkProductions } from "../milk-production/milk-productions.model";

export class Caddle {
        constructor(
                public id: string,
                public name: string,
                public number: number,
                public birthDate: Date,
                public gender: string,
                public weight: number,
                public milkProductions: MilkProductions[]
        ) {

        }
}
