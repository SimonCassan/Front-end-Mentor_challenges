import { SortMode } from "../types/sort";
import { ArrowDownAZ, ArrowUpAZ, CalendarArrowDown, CalendarArrowUp, ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";

const sortConfig = {
    date: {
        asc: { icon: CalendarArrowDown },
        desc: { icon: CalendarArrowUp },
        ariaAsc: "Most older",
        ariaDesc: "Most recent",
        label: "Date"
    },
    difficulty: {
        asc: { icon: ArrowDownNarrowWide },
        desc: { icon: ArrowUpNarrowWide },
        ariaAsc: "...",
        ariaDesc: "...",
        label: "Difficulty"
    },
    alpha: {
        asc: { icon: ArrowDownAZ },
        desc: { icon: ArrowUpAZ },
        ariaAsc: "...",
        ariaDesc: "...",
        label: "Name"
    }
}

type HeaderProps = {
    buttonMode: SortMode;
    sortMode: SortMode;
    setSortMode: React.Dispatch<React.SetStateAction<SortMode>>;
    sortOrder: 'asc' | 'desc';
    setSortOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
}

function SortButton({ buttonMode, sortMode, setSortMode, sortOrder, setSortOrder }: HeaderProps) {
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
    const { asc, desc, ariaAsc, ariaDesc, label } = sortConfig[buttonMode];
    const Icon = sortOrder === 'desc' && buttonMode === sortMode ? desc.icon : asc.icon;
    return (
        <button
            className={sortMode === buttonMode ? "active" : ""}
            aria-pressed={sortMode === buttonMode}
            aria-label={sortMode === buttonMode && sortOrder === "desc" ? ariaAsc : ariaDesc}
            title={sortMode === buttonMode && sortOrder === "desc" ? ariaDesc : ariaAsc}
            onClick={() => handleSortClick(buttonMode)}>
            <Icon size={20} color="#ff8c8c" /> :
            <span className="button-label">{label}</span>
        </button>
    )
}

export default SortButton;