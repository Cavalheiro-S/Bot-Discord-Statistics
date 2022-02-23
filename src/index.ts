import infoPlayer from "./Riot/player";

require("dotenv/config");
const { Client, Intents, MessageAttachment } = require("discord.js");

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
    const [args, commandMessage] = message.content.split(prefix);
    const [command, sufixCommand] = commandMessage.split(" ");
    console.log(commandMessage);
    switch(command){
        case "info":
            try {
                const attachment = await infoPlayer(sufixCommand);
                message.channel.send({
                    embeds : [attachment]
                })
                
            } catch (error) {
                console.log(error);
                message.channel.send("Jogador não encontrado");
            }
    }
})

client.login(process.env.DISCORD_BOT_TOKEN);