import { useEffect, useState } from "react";
import { Challenge } from "./types/challenge";
import CardsList from "./components/CardsList";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
    return (
        <>
            <main>
                <Header />
                <CardsList challenges={challenges} />
            </main>
            <Footer />
        </>
    )
}
export default App;