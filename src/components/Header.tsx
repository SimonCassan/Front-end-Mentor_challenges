function Header() {
    return (
        <header>
            <div className="header-block">
                <h1>My Challenges:</h1>
                <div className="buttons-block">
                    <button>
                        <img src="./img/recent-older.svg" alt="" />Most Recent
                    </button>
                    <button>
                        <img src="./img/easy-hard.svg" alt="" />Difficulty
                    </button>
                    <button>
                        <img src="./img/a-z.svg" alt="" />Name
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;