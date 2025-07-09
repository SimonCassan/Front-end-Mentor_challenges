import ChallengeInfos from "./ChallengeInfos";
import Masonry from "masonry-layout";
import { useEffect, useRef } from "react";
import type { Challenge } from "../types/challenge";

type ChallengesProps = {
    challenges: Challenge[];
}

const BASE_URL = 'https://simoncassan.github.io/Front-end-Mentor_challenges/challenges';

function CardsList({ challenges }: ChallengesProps) {
    const gridRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!gridRef.current) return;
        // Initialisation Masonry à chaque render ou update des items
        const msnry = new Masonry(gridRef.current, {
            itemSelector: ".card",
            columnWidth: ".card",
            fitWidth: true,
            gutter: 16,
        });
        // Nettoyage à la destruction du composant
        return () => msnry.destroy();
    }, [challenges]);

    const challengesList = challenges.map(challenge => (
        <div className="card" key={challenge.url}>
            <a href={BASE_URL + challenge.url} target="_blank">
                <img src={BASE_URL + challenge.url + "screenshot.jpg"} alt={`${challenge.name} picture preview`} />
                <h2>{challenge.name}</h2>
                <ChallengeInfos challenge={challenge} />
            </a>
        </div>
    ))
    return (
        <div ref={gridRef} className="main-container">
            {challengesList}
        </div>
    )
}

export default CardsList;