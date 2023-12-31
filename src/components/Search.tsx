import { useRef, useState } from "react";
import { getRankedStatsBySummonerName } from "../api/user-account/user-account-api";
import { Button } from "./shared/Button";
import { useNavigate } from "react-router-dom";

export function Search() {
    const [accountName, setAccountName] = useState<string>('');
    const [error, setError] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    function onSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        getRankedStatsBySummonerName(accountName)
            .then((data) => {
                navigate(`/summoner/${accountName}`, { state: data });
            })
            .catch((err) => {
                if (err.message) {
                    setError('No account found with that summoner name');
                } else {
                    setError(err);
                }
                setAccountName('');
                inputRef?.current?.focus();
            });
    }
    
    return (
        <form className="search-bar-container w-2/5 justify-center" onSubmit={onSearchSubmit}>
            {error && <p className="text-red-500"><small>{error}</small></p>}
            <input 
                className={`transition search w-4/5 p-3 border-solid border-2 focus:outline-none ${error ? 'border-red-500' : 'border-black focus-visible:border-blue-700'} rounded-lg`} 
                type="text" 
                placeholder="Search for account by name" 
                onChange={(event) => setAccountName(event.target.value)}
                value={accountName}
                ref={inputRef}
                autoFocus
            />
            <Button type={"submit"} disabled={accountName.length === 0} text={"Search"}/>
        </form>
    );
}