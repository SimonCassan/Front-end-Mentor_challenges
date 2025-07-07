import { DifficultyKey } from "./difficulty";

export interface Challenge {
    name: string;
    url: string;
    date: string;
    categories: string[];
    difficulty: DifficultyKey;
}