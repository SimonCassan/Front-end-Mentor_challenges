import { useEffect, useState } from "react";
import { Challenge } from "./types/challenge";
import { SortMode } from "./types/sort";
import CardsList from "./components/CardsList";
import Footer from "./components/Footer";
import Header from "./components/Header";

async function fetchChallenges(): Promise<Challenge[]> {
    const res = await fetch(import.meta.env.BASE_URL + 'data/challenges.json');
    return res.json();
}

function App() {
    const [challenges, setChallenges] = useState<Challenge[]>([]);
    useEffect(() => {
        async function getChallenges() {
            const data: Challenge[] = await fetchChallenges();
            setChallenges(data);
        }
        getChallenges();
    }, []);

    const [sortMode, setSortMode] = useState<SortMode>('alpha');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');


    let sortedChallenges: Challenge[] = [...challenges];

    if (sortMode === "alpha")
        sortedChallenges.sort((a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
    else if (sortMode === 'date')
        sortedChallenges.sort((a, b) => sortOrder === 'asc' ? new Date(a.date).getTime() - new Date(b.date).getTime() : new Date(b.date).getTime() - new Date(a.date).getTime());
    else
        sortedChallenges.sort((a, b) => sortOrder === 'asc' ? a.difficulty - b.difficulty : b.difficulty - a.difficulty);

    return (
        <>
            <main>
                <Header sortMode={sortMode} setSortMode={setSortMode} sortOrder={sortOrder} setSortOrder={setSortOrder} />
                <CardsList challenges={sortedChallenges} />
            </main>
            <Footer />
        </>
    )
}
export default App;