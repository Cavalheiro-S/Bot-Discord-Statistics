import axios from "../../node_modules/axios/index";
import{ getInfoAllChampions }from "./champion";
import {embedImageInfo} from "./embed/PlayerInfo";
import summonerProps from './interface/summoner';

async function embedPlayerInfo(name) {
    const dataPlayer = await getInfoByNamePlayer(name);
    const urlIcon = await getUrlImageIcon(dataPlayer.profileIconId);
    const infoChampions = await getInfoAllChampions(dataPlayer.id)
    return embedImageInfo(dataPlayer, urlIcon, infoChampions)
}

async function getUrlImageIcon(idIcon) {
    return `http://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/${idIcon}.png`
}

async function getInfoByNamePlayer(name) {
    return await axios.get<summonerProps>(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.RIOT_API_KEY}`)
        .then(response => response.data);
}

export {embedPlayerInfo, getUrlImageIcon ,getInfoByNamePlayer};