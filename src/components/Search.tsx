import { useState } from "react";
import { getRankedStatsBySummonerName } from "../api/user-account/user-account-api";

export function Search() {
    const [accountName, setAccountName] = useState<string>('');

    function onSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        getRankedStatsBySummonerName(accountName)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }
    
    return (
        <form className="search-bar-container w-2/5 justify-center" onSubmit={onSearchSubmit}>
            <input 
                className="search w-4/5 p-3 border-solid border-2 border-slate-400 rounded-lg" 
                type="text" 
                placeholder="Search for account by name" 
                onChange={(event) => setAccountName(event.target.value)}
            />
            <button type="submit" className="inline p-3 ml-2 bg-blue-700 hover:bg-black text-white rounded-xl" disabled={accountName.length === 0}>Search</button>
        </form>
    )
}