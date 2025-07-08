import { useEffect, useState } from "react";
import CardsList from "./components/CardsList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Challenge } from "./types/challenge";
import { SortMode } from "./types/sort";

async function fetchChallenges(): Promise<Challenge[]> {
    const res = await fetch('/src/data/challenges.json');
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
    if (sortMode === "alpha") {
        if (sortOrder === 'asc')
            sortedChallenges.sort((a, b) => a.name.localeCompare(b.name));
        else
            sortedChallenges.sort((a, b) => b.name.localeCompare(a.name));
    }
    else if (sortMode === 'date')
        if (sortOrder === 'asc')
            sortedChallenges.sort((a, b) => b.date.localeCompare(a.date));
        else
            sortedChallenges.sort((a, b) => a.date.localeCompare(b.date));

    return (
        <>
            <main>
                <Header challenges={challenges} sortMode={sortMode} setSortMode={setSortMode} sortOrder={sortOrder} setSortOrder={setSortOrder} />
                <CardsList challenges={sortedChallenges} />
            </main>
            <Footer />
        </>
    )
}
export default App;