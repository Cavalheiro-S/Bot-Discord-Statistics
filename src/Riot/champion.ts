import axios from "../../node_modules/axios/index";

async function getNameOfAllChampionsMastery(playerId) {
    const listOfMasteryAllChampions = await getMasteryChampions(playerId);

    const arrayOfChampions = [{
        name: await verifyWhichNameOfIdChampion(listOfMasteryAllChampions[0].championId),
        image: await getUrlImageChampion(await verifyWhichNameOfIdChampion(listOfMasteryAllChampions[0].championId))
    },
    {
        name: await verifyWhichNameOfIdChampion(listOfMasteryAllChampions[1].championId),
        image: await getUrlImageChampion(await verifyWhichNameOfIdChampion(listOfMasteryAllChampions[1].championId)),
    },
    {
        name: await verifyWhichNameOfIdChampion(listOfMasteryAllChampions[2].championId),
        image: await getUrlImageChampion(await verifyWhichNameOfIdChampion(listOfMasteryAllChampions[2].championId))
    }
    ]

    return arrayOfChampions
}


async function getMasteryChampions(playerId) {

    return await axios.get<championMasteryProps[]>(`https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${playerId}?api_key=${process.env.RIOT_API_KEY}`)
        .then(response => response.data);
}

function getUrlImageChampion(nameChampion): string {
    return `http://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${nameChampion}.png`
}

async function getAllChampionsJson() {
    return axios.get(`http://ddragon.leagueoflegends.com/cdn/12.4.1/data/pt_BR/champion.json`)
        .then(response => response.data.data);
}

async function verifyWhichNameOfIdChampion(idChampion) {
    const listOfChampions = await getAllChampionsJson();
    const infoOfChampions = Object.values<championInfoProps>(listOfChampions);
    const nameOfChampion = infoOfChampions.filter((info) => info.key == idChampion ? info : null)
    return nameOfChampion[0].id
}

export default getNameOfAllChampionsMastery