const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content === "abortion") {
    msg.reply("Abortion is wrong, dont do it!")
  }
})
client.login(process.env.token);