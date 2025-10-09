import { Events } from 'discord.js';
import schedule from 'node-schedule';

// Executed when bot is ready
export const event = {
    name: Events.ClientReady,
    once: true,
    async execute(client){
        // Bot is ready message
        console.log(`Ready! Logged in as ${client.user.tag}`);

        // On change l'activité toutes les heures
        schedule.scheduleJob("activity", '0 0 0-23 * * *', async function() {

            const activities = [
                "Fait des pizzas",
                "Transfère le loot au vaisseau",
                "Attend que le vaisseau parte",
                "Tire au railgun",
                "Remet des munitions",
                "Cherche à regonfler le ballon du hangar",
                "Répare la machine à pizzas", 
                "Récupère la materia",
                "Extermine les robots"
            ];

            const activity = Math.floor(Math.random() * activities.length);

            client.user.setActivity(activities[activity]);
        });

        client.user.setStatus("online");

        // TODO boucle pour récupérer les datas des membres (faire une fonction)
    }
}