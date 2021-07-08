// main.ts
/// <reference path="./deploy.d.ts" />
import { startBot, cache } from "./deps.ts";

startBot({
  token: Deno.env.get("BOT_TOKEN")!,
  intents: ["Guilds", "GuildMessages"],
  eventHandlers: {
    ready() {
      console.log("Successfully connected to gateway");
      const channel = cache.channels.get(845991491020521472n)
      console.log(channel!.send)
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
