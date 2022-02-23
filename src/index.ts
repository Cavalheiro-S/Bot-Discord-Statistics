require("dotenv/config");
import {embedPlayerInfo, embedChampions} from "./Riot";
const { Client, Intents } = require("discord.js");
const prefix = '/';

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.once("ready", () => {
    console.log("Bot is ready");
})

client.on("messageCreate",async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const [whiteSpace, commandMessage] = message.content.split(prefix);
    const [commandName, commandSuffix] = commandMessage.split(" ");
    if(commandSuffix === " " || commandSuffix === "") return;
    switch(commandName){
        case "info":
            try {
                const attachment = await embedPlayerInfo(commandSuffix);
                message.channel.send({
                    embeds : [attachment]
                })
                
            } catch (error) {
                console.log(error);
                message.channel.send("Jogador não encontrado");
            }
        case "chest":
            try {
                const attachment = await embedChampions(commandSuffix)
                message.channel.send(
                    {embeds : [attachment]}
                )
            } catch (error) {
                console.log(error);
                message.channel.send("Erro encontrado")
            }
    }
})

client.login(process.env.DISCORD_BOT_TOKEN);