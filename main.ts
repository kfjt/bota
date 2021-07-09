// main.ts
/// <reference path="./deploy.d.ts" />
import { startBot, cache, cron } from "./deps.ts";

startBot({
  token: Deno.env.get("BOT_TOKEN")!,
  intents: ["Guilds", "GuildMessages"],
  eventHandlers: {
    ready() {
      console.log("Successfully connected to gateway");
      const channel = cache.channels.get(845991491020521472n)
      console.log(new Date())
      cron('1 0,30 1-6 * * *', () => {
        channel!.send('25分作業するよー')
      });
      cron('1 25,55 1-6 * * *', () => {
        channel!.send('5分休むよー')
      });
      cron('2 0 12 * * *', () => {
        channel!.send('ランチじゃね？')
      });
      cron('2 0 7 * * *', () => {
        channel!.send('１６時じゃね？')
      });
    },
    messageCreate(message) {
      // Process the message with your command handler here
      console.log(message);
      if (message.content === "!ping") {
        message.reply("Pong using Discordeno!");
      }
      if (message.content === "!ping2") {
        message.reply("Pong2 using Discordeno!");
      }
      if (message.content === "!ping3") {
        message.reply("Pong3 using Discordeno!");
      }
    },
    raw(data) {
      // console.log(data);
    },
  },
});

addEventListener("fetch", (event) => {
  const response = new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
