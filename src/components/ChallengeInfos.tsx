import { Challenge } from "../types/challenge";
import DifficultyLabel from "./DifficultyLabel";
type ChallengeInfosProps = {
    challenge: Challenge;
};

function ChallengeInfos({ challenge }: ChallengeInfosProps) {
    return (
        <div className="info">
            <ul className="card-tags">
                {challenge.categories.map(categorie => (
                    <li className={`card-tag ${categorie}-style`} key={challenge.url + categorie}>{categorie.toUpperCase()}</li>
                ))}
            </ul>
            <DifficultyLabel difficulty={challenge.difficulty} />
        </div>
    )
}

export default ChallengeInfos;