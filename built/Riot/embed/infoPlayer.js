"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageEmbed = require("discord.js").MessageEmbed;
function embedImageInfo(infoPlayer, urlIcon, championsMastery) {
    return new MessageEmbed()
        .setTitle(infoPlayer.name)
        .setThumbnail(urlIcon)
        .setDescription("Informações do usuário")
        .setImage(championsMastery[0].image)
        .addFields({ name: "Level", value: infoPlayer.summonerLevel.toString() }, { name: "Campeão mais jogado #1", value: championsMastery[0].name.toString(), inline: true }, { name: "Campeão mais jogado #2", value: championsMastery[1].name.toString(), inline: true }, { name: "Campeão mais jogado #3", value: championsMastery[2].name.toString(), inline: true });
}
exports.default = embedImageInfo;
