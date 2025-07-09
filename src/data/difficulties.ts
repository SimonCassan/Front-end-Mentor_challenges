import { DifficultyKey, DifficultyValues } from "../types/difficulty";

export const difficultyMap: Record<DifficultyKey, DifficultyValues> = {
    1: { label: 'Newbie', class: 'difficulty-veryeasy' },
    2: { label: 'Junior', class: 'difficulty-easy' },
    3: { label: 'Intermediate', class: 'difficulty-medium' },
    4: { label: 'Advanced', class: 'difficulty-hard' },
    5: { label: 'Guru', class: 'difficulty-expert' },
    99: { label: 'Void', class: 'difficulty-unknown' }
};