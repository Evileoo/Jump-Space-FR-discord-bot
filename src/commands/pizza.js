import { SlashCommandBuilder, MessageFlags } from 'discord.js';

export const command = {
    data: new SlashCommandBuilder()
    .setName("pizza")
    .setDescription("Bon app'")
    , async execute(interaction){

        const isPizzaiolo = interaction.member.roles.cache.some(r => r.name == 'pizzaiolo');
        
        if(isPizzaiolo) {
            interaction.reply({
                content: `Fais ta pizza toi-même.`
            });
        } else {
            interaction.reply({
                content: `Bon appétit ! :pizza:`
            });
        }
    }
}