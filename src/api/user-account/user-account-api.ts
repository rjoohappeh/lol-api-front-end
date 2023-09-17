import axios from "axios";
import { getEnvVariable } from "../../util/config";

export function getRankedStatsBySummonerName(name: string) {
    const apiUrl = getEnvVariable('REACT_APP_LOL_API_BASE_URL');
    const path = `/user-account/ranked/stats/${name}`;
    const fullPath = apiUrl + path;
    console.log(apiUrl);
    console.log(path);
    return axios.get(fullPath)
        .then((response) => console.log(response.data));
    
}