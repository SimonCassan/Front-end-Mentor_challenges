import { Challenge } from "../types/challenge";
import { SortMode } from "../types/sort";
import { ArrowDownAZ, ArrowDownZA, CalendarArrowDown, CalendarArrowUp, ChartNoAxesColumnDecreasing, ChartNoAxesColumnIncreasing } from "lucide-react";

type HeaderProps = {
    challenges: Challenge[];
    sortMode: SortMode;
    setSortMode: React.Dispatch<React.SetStateAction<SortMode>>;
}

function Header({ challenges, sortMode, setSortMode }: HeaderProps) {
    return (
        <header>
            <div className="header-block">
                <h1>My Challenges&nbsp;:</h1>
                <div className="buttons-block">
                    <button onClick={() => setSortMode("date")}>
                        <CalendarArrowUp size={20} color="#ff8c8c" /><CalendarArrowDown size={20} color="#ff8c8c" />Most Recent
                    </button>
                    <button onClick={() => setSortMode("difficulty")}>
                        <ChartNoAxesColumnIncreasing size={20} color="#ff8c8c" /><ChartNoAxesColumnDecreasing size={20} color="#ff8c8c" />Difficulty
                    </button>
                    <button onClick={() => setSortMode("alpha")}>
                        <ArrowDownAZ size={20} color="#ff8c8c" /><ArrowDownZA size={20} color="#ff8c8c" />Name
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;