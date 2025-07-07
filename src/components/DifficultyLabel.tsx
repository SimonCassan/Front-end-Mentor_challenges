import type { DifficultyKey, DifficultyValues } from "../types/difficulty";
import { difficultyMap } from "../data/difficulties";
type DifficultyProp = {
    difficulty: DifficultyKey;
}

function DifficultyLabel({ difficulty }: DifficultyProp) {
    const { label, class: difficultyClass }: DifficultyValues = difficultyMap[difficulty] || difficultyMap.default;
    return (
        <div className={`${difficultyClass} difficulty`}>
            <span className="difficulty-number">{difficulty}</span>
            <span className="difficulty-text">{label}</span>
        </div>
    )
}

export default DifficultyLabel;