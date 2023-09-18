import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="navbar h-12 w-4/5 bg-gray-200 flex m-auto text-black rounded-b-xl">
            <div>
                <ul>
                    <NavLink to="/" className={({ isActive }) => {
                            const classList = 'p-3 hover:text-blue-700 hover:cursor-pointer hover:bg-gray-300 rounded-b-xl h-full inline-block';
                            return isActive ? `${classList}` : classList;
                        }
                    }>
                        Summoner Name
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
}