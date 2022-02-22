require("dotenv/config");
const { default: axios } = require("axios");
const embedImageInfo = require("./imageAttachment");

async function infoPlayer(name) {

    const dataPlayer = await getInfoByNamePlayer(name);
    const listMasteryChampions = await getMasteryChampions(dataPlayer.id);
    const urlIcon = await getUrlImageIcon(dataPlayer.profileIconId);
    const nameChampionMastery1 = await verifyWhichNameOfIdChampion(listMasteryChampions[0].championId)
    const nameChampionMastery2 = await verifyWhichNameOfIdChampion(listMasteryChampions[1].championId)
    const nameChampionMastery3 = await verifyWhichNameOfIdChampion(listMasteryChampions[2].championId)
    const urlChampion = await getUrlImageChampion(nameChampionMastery1);
    return embedImageInfo(urlIcon, dataPlayer, urlChampion,nameChampionMastery1 , nameChampionMastery2, nameChampionMastery3)

}

async function getInfoByNamePlayer(name){
    return await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.RIOT_API_KEY}`)
    .then(response => response.data);
}

async function getMasteryChampions(playerId){

    return await axios.get(`https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${playerId}?api_key=${process.env.RIOT_API_KEY}`)
    .then(response => response.data);
}

async function getUrlImageIcon(idIcon){
    return `http://ddragon.leagueoflegends.com/cdn/12.4.1/img/profileicon/${idIcon}.png`
}

async function getUrlImageChampion(idChampion){
    return `http://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${idChampion}.png`
}

async function getAllChampionsJson(){
    return axios.get(`http://ddragon.leagueoflegends.com/cdn/12.4.1/data/pt_BR/champion.json`)
    .then(response => response.data.data);
}

async function verifyWhichNameOfIdChampion(idChampion){
    const listOfChampions = await getAllChampionsJson();
    const infoOfChampions = Object.values(listOfChampions);
    const idCorrect = infoOfChampions.filter( (info) => info.key == idChampion ? info.id : null)
    return idCorrect[0].id
}

module.exports = infoPlayer;