import { NavLink } from "react-router-dom";

export function Navbar() {
    const linkClassList = 'transition p-3 hover:text-blue-700 hover:cursor-pointer hover:bg-gray-300 rounded-b-xl h-full inline-block';
    return (
        <nav className="navbar h-12 bg-gray-200 flex text-black rounded-b-xl">
            <div>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => {
                                return isActive ? `${linkClassList} bg-gray-300` : linkClassList;
                            }
                        }>
                            Summoner Name
                        </NavLink>  
                    </li>
                </ul>
            </div>
        </nav>
    );
}