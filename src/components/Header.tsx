import SortButton from "./SortButton";
import { SortMode } from "../types/sort";

type HeaderProps = {
    sortMode: SortMode;
    setSortMode: React.Dispatch<React.SetStateAction<SortMode>>;
    sortOrder: 'asc' | 'desc';
    setSortOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>;
}

function Header({ sortMode, setSortMode, sortOrder, setSortOrder }: HeaderProps) {
    return (
        <header>
            <div className="header-block">
                <h1>My Challenges&nbsp;:</h1>
                <div className="buttons-block">
                    <SortButton buttonMode="date" setSortMode={setSortMode} setSortOrder={setSortOrder} sortMode={sortMode} sortOrder={sortOrder} />
                    <SortButton buttonMode="difficulty" setSortMode={setSortMode} setSortOrder={setSortOrder} sortMode={sortMode} sortOrder={sortOrder} />
                    <SortButton buttonMode="alpha" setSortMode={setSortMode} setSortOrder={setSortOrder} sortMode={sortMode} sortOrder={sortOrder} />
                </div>
            </div>
        </header>
    )
}

export default Header;