import summonerProps from '../interface/summoner';
import { majorInfoChampions } from '../interface/champion';
const { MessageEmbed } = require("discord.js")

function embedImageInfo(infoPlayer: summonerProps, urlIcon : string, championsMastery : majorInfoChampions) {
    return new MessageEmbed()
        .setTitle(infoPlayer.name)
        .setThumbnail(urlIcon)
        .setDescription("Informações do usuário")
        .setImage(championsMastery.championsName[0].image)
        .addFields(
            { name: "Level", value: infoPlayer.summonerLevel.toString()},
            {name: "Campeão mais jogado #1", value: championsMastery.championsName[0].name.toString(), inline:true},
            {name: "Campeão mais jogado #2", value: championsMastery.championsName[1].name.toString(), inline:true},
            {name: "Campeão mais jogado #3", value: championsMastery.championsName[2].name.toString(), inline:true},
            
        )
}

function embedChampionChestInfo(infoPlayer: summonerProps,urlIcon:string,championsMastery : majorInfoChampions){

    return new MessageEmbed()
        .setTitle(infoPlayer.name)
        .setThumbnail(urlIcon)
        .setDescription("Campeões para ganhar baú")
        .addFields(
            {name: "Campeão #1", value:championsMastery.championsWithoutChest[0], inline:true},
            {name: "Campeão #2", value:championsMastery.championsWithoutChest[1], inline:true},
            {name: "Campeão #3", value:championsMastery.championsWithoutChest[2], inline:true}
        )

}
export {embedImageInfo, embedChampionChestInfo};