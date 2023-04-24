const { Client, Events, GatewayIntentBits, SlashCommandBuilder} = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]});

client.once(Events.ClientReady, async c => {
    console.log(`Client logged in as ${c.user.tag}`)
    const command = new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping pong command');

    
    const commandData = command.toJSON();
    await client.application.commands.create(commandData)
})


client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    if(interaction.commandName === 'ping') {
        await interaction.reply('Pong')
    }
})


client.login("INSERT-TOKEN-HERE");
