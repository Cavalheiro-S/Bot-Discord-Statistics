import axios from "../../node_modules/axios/index";
import { championMasteryProps, championInfoProps, majorInfoChampions } from "./interface/champion";
import { embedChampionChestInfo } from "./embed/PlayerInfo";
import { getUrlImageIcon, getInfoByNamePlayer } from "./player"

async function embedChampions(name: string){
    const playerInfo = await getInfoByNamePlayer(name)
    const urlIcon = await getUrlImageIcon(playerInfo.profileIconId);
    const championsMastery = await getInfoAllChampions(playerInfo.id)
    return embedChampionChestInfo(playerInfo,urlIcon,championsMastery);
}

async function getInfoAllChampions(playerId: string){
    const listOfChampions = await getMasteryChampions(playerId);
    const championsName = await getNameOfAllChampionsMastery(listOfChampions);
    const championsWithoutChest = await getChampionsWithoutChestGranted(listOfChampions);
    return {
        championsName,
        championsWithoutChest
    }
}

async function getNameOfAllChampionsMastery(listOfChampions : championMasteryProps[]) : Promise<{name: string, image:string}[]>{
    const arrayOfInfoChampions = listOfChampions.map(async ( infoMasteryChampion,index) => {
        if(index <= 20){
            let name = await verifyWhichNameOfIdChampion(infoMasteryChampion.championId)
            let image = await getUrlImageChampion(name);
            return {
                name,
                image
            }
        }
    })
    return Promise.all(arrayOfInfoChampions)
}

async function getChampionsWithoutChestGranted(listOfChampions : championMasteryProps[]){
    const championsWithoutChest = listOfChampions.map( async (championInfo) => {
        if(!championInfo.chestGranted){
            const name = await verifyWhichNameOfIdChampion(championInfo.championId);
            return name;
        }
    });
    return (await Promise.all(championsWithoutChest)).filter(champion => champion ? champion : null );
}
async function verifyWhichNameOfIdChampion(idChampion) {
    const listOfChampions = await getAllChampionsJson();
    const infoOfChampions = Object.values<championInfoProps>(listOfChampions);
    const nameOfChampion = infoOfChampions.filter((info) => info.key == idChampion ? info : null)
    return nameOfChampion[0].id
}


async function getAllChampionsJson() {
    return axios.get(`http://ddragon.leagueoflegends.com/cdn/12.4.1/data/pt_BR/champion.json`)
        .then(response => response.data.data);
}

async function getMasteryChampions(playerId) {

    return await axios.get<championMasteryProps[]>(`https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${playerId}?api_key=${process.env.RIOT_API_KEY}`)
        .then(response => response.data);
}

function getUrlImageChampion(nameChampion): string {
    return `http://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${nameChampion}.png`
}


export {getInfoAllChampions, embedChampions};