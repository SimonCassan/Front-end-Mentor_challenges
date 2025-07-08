import { Challenge } from "../types/challenge";
import { SortMode } from "../types/sort";
import { ArrowDownAZ, ArrowDownZA, CalendarArrowDown, CalendarArrowUp, ChartNoAxesColumnDecreasing, ChartNoAxesColumnIncreasing } from "lucide-react";

type HeaderProps = {
    challenges: Challenge[];
    sortMode: SortMode;
    setSortMode: React.Dispatch<React.SetStateAction<SortMode>>;
    sortOrder: 'asc' | 'desc';
    setSortOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
}

function Header({ challenges, sortMode, setSortMode, sortOrder, setSortOrder }: HeaderProps) {
    const handleSortClick = (mode: SortMode): void => {
        if (mode === sortMode) {
            sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
            setSortOrder(sortOrder);
        }
        else {
            setSortOrder('asc');
            sortMode = mode;
            setSortMode(sortMode);
        }
    }

    return (
        <header>
            <div className="header-block">
                <h1>My Challenges&nbsp;:</h1>
                <div className="buttons-block">
                    <button
                        className={sortMode === "date" ? "active" : ""}
                        aria-pressed={sortMode === "date" ? "true" : "false"}
                        aria-label={sortMode === "date" && sortOrder === "desc" ? "Sort from most recent to most older" : "Sort from most older to most recent"}
                        title={sortMode === "date" && sortOrder === "desc" ? "Sort from most older to most recent" : "Sort from most recent to most older"}
                        onClick={() => handleSortClick("date")}>
                        {sortOrder === 'desc' && sortMode === 'date' ?
                            (<><CalendarArrowUp size={20} color="#ff8c8c" /><span className="button-label">Most Older&nbsp;&nbsp;&nbsp;</span></>) :
                            (<><CalendarArrowDown size={20} color="#ff8c8c" /><span className="button-label">Most Recent</span></>)}
                    </button>
                    <button onClick={() => handleSortClick("difficulty")}>
                        <ChartNoAxesColumnIncreasing size={20} color="#ff8c8c" /><ChartNoAxesColumnDecreasing size={20} color="#ff8c8c" />Difficulty
                    </button>
                    <button onClick={() => handleSortClick("alpha")}>
                        <ArrowDownAZ size={20} color="#ff8c8c" /><ArrowDownZA size={20} color="#ff8c8c" />Name
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;