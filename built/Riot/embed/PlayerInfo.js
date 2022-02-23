"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.embedChampionChestInfo = exports.embedImageInfo = void 0;
var MessageEmbed = require("discord.js").MessageEmbed;
function embedImageInfo(infoPlayer, urlIcon, championsMastery) {
    return new MessageEmbed()
        .setTitle(infoPlayer.name)
        .setThumbnail(urlIcon)
        .setDescription("Informações do usuário")
        .setImage(championsMastery.championsName[0].image)
        .addFields({ name: "Level", value: infoPlayer.summonerLevel.toString() }, { name: "Campeão mais jogado #1", value: championsMastery.championsName[0].name.toString(), inline: true }, { name: "Campeão mais jogado #2", value: championsMastery.championsName[1].name.toString(), inline: true }, { name: "Campeão mais jogado #3", value: championsMastery.championsName[2].name.toString(), inline: true });
}
exports.embedImageInfo = embedImageInfo;
function embedChampionChestInfo(infoPlayer, urlIcon, championsMastery) {
    return new MessageEmbed()
        .setTitle(infoPlayer.name)
        .setThumbnail(urlIcon)
        .setDescription("Campeões para ganhar baú")
        .addFields({ name: "Campeão #1", value: championsMastery.championsWithoutChest[0], inline: true }, { name: "Campeão #2", value: championsMastery.championsWithoutChest[1], inline: true }, { name: "Campeão #3", value: championsMastery.championsWithoutChest[2], inline: true });
}
exports.embedChampionChestInfo = embedChampionChestInfo;
