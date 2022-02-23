import axios from "../../node_modules/axios/index";
import getNameOfAllChampionsMastery from "./champion";
import embedImageInfo from "./embed/infoPlayer";
import summonerProps from './interface/summoner';

async function infoPlayer(name) {

    const dataPlayer = await getInfoByNamePlayer(name);
    const urlIcon = await getUrlImageIcon(dataPlayer.profileIconId);
    const championsMastery = await getNameOfAllChampionsMastery(dataPlayer.id)
    
    return embedImageInfo(dataPlayer, urlIcon, championsMastery)
}

async function getUrlImageIcon(idIcon) {
    return `http://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/${idIcon}.png`
}

async function getInfoByNamePlayer(name) {
    return await axios.get<summonerProps>(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.RIOT_API_KEY}`)
        .then(response => response.data);
}

export default infoPlayer;