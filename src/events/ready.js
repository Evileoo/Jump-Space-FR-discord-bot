import { Events } from 'discord.js';

// Executed when bot is ready
export const event = {
    name: Events.ClientReady,
    once: true,
    async execute(client){
        // Bot is ready message
        console.log(`Ready! Logged in as ${client.user.tag}`);

        // TODO boucle pour changer l'activité
        client.user.setActivity("Répare la machine à pizzas");
        client.user.setStatus("online");

        // TODO boucle pour récupérer les datas des membres (faire une fonction)
    }
}