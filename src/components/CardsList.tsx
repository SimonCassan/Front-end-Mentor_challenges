import ChallengeInfos from "./ChallengeInfos";
import type { Challenge } from "../types/challenge";

type CardsListProps = {
    challenges: Challenge[];
};
const BASE_URL = 'https://simoncassan.github.io/Front-end-Mentor_challenges';

function CardsList({ challenges }: CardsListProps) {
    const challengesList = challenges.map(challenge => (
        <div className="card" key={challenge.url}>
            <a href={BASE_URL + challenge.url} target="_blank">
                <img src={`/challenges${challenge.url}screenshot.jpg`} alt={`${challenge.name} picture preview`} />
                <h2>{challenge.name}</h2>
                <ChallengeInfos challenge={challenge} />
            </a>
        </div>
    ))
    return (
        <div className="main-container">
            {challengesList}
        </div>
    )
}

export default CardsList;