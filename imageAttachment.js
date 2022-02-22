const { MessageEmbed } = require("discord.js")

function embedImageInfo(urlIcon, infoUser, urlChampion ,championMaster1,championMaster2, championMaster3 ) {

    return new MessageEmbed()
        .setTitle(infoUser.name)
        .setThumbnail(urlIcon)
        .setDescription("Informações do usuário")
        .setImage(urlChampion)
        .addFields(
            { name: "Level", value: infoUser.summonerLevel.toString()},
            {name: "Campeão mais jogado #1", value: championMaster1.toString(), inline:true},
            {name: "Campeão mais jogado #2", value: championMaster2.toString(), inline:true},
            {name: "Campeão mais jogado #3", value: championMaster3.toString(), inline:true}
        )
}



module.exports = embedImageInfo;