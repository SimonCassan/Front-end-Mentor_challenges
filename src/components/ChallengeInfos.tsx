import { Challenge } from "../types/challenge";
type ChallengeInfosProps = {
    challenge: Challenge;
};

function ChallengeInfos({ challenge }: ChallengeInfosProps) {
    return (
        <div className="info">
            <ul className="card-tags">
                {challenge.categories.map(categorie => (
                    <li className="card-tag" key={challenge.url + categorie}>{categorie.toUpperCase()}</li>
                ))}
            </ul>
        </div>
    )
}

export default ChallengeInfos;