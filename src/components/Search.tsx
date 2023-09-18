import { useState } from "react";
import { getRankedStatsBySummonerName } from "../api/user-account/user-account-api";
import { Button } from "./shared/Button";

export function Search() {
    const [accountName, setAccountName] = useState<string>('');
    const [ error, setError ] = useState<string>('');

    function onSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        getRankedStatsBySummonerName(accountName)
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                setError(err);
            });
    }
    
    return (
        <form className="search-bar-container w-2/5 justify-center" onSubmit={onSearchSubmit}>
            <input 
                className="transition search w-4/5 p-3 border-solid border-2 border-black focus-visible:border-blue-700 focus:outline-none rounded-lg" 
                type="text" 
                placeholder="Search for account by name" 
                onChange={(event) => setAccountName(event.target.value)}
            />
            <Button type={"submit"} disabled={accountName.length === 0} text={"Search"}/>
        </form>
    );
}