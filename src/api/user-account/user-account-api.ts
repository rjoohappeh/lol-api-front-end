import axios from "axios";
import { getEnvVariable } from "../../util/config";

export function getRankedStatsBySummonerName(name: string) {
    const apiUrl = getEnvVariable('REACT_APP_LOL_API_BASE_URL');
    const path = `/user-account/ranked/stats/${name}`;
    const fullPath = apiUrl + path;
    
    return axios.get(fullPath)
        .then((response) => {
            if (response.data.length === 0) {
                return Promise.reject('No ranked info found for the given name');
            }
            return response.data;
        });
    
}