// main.ts
import { startBot } from "https://deno.land/x/discordeno/mod.ts";

startBot({
  token: Deno.env.get("BOT_TOKEN")!,
  intents: ["Guilds", "GuildMessages"],
  eventHandlers: {
    ready() {
      console.log("Successfully connected to gateway");
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
  },
});
