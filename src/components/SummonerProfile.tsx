import { useLocation } from "react-router";
import { RankedStatsDto } from "../api/types";


export function SummonerProfile() {
    const rankedStats = useLocation().state[0] as RankedStatsDto;
    console.log(rankedStats);

    return (
        <div className="summoner-profile">
            <p className="name">{rankedStats.summonerName}</p>
            <div className="queueType">
                <p>{rankedStats.queueType}</p>
            </div>
            <div>
                <p className="wins-losses">
                    <span className="wins">{rankedStats.wins}</span>/
                    <span className="losses">{rankedStats.losses}</span>
                </p>
            </div>
        </div>
    );
}
