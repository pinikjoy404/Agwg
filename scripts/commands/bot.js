const axios = require("axios");

module.exports.config = {
  name: "bot",
  version: "1.0.0",
  permission: 0,
  credits: "Joy-Ahmed",
  description: "Talk to Ana",
  prefix: true, 
  category: "sim simi fun", 
  usages: "bot",
  cooldowns: 5,
  dependencies: {}
};

module.exports.handleEvent = async function ({ api, event }) {
    if (!(event.body.indexOf("bot") === 0 || event.body.indexOf("বট") === 0)) return;
    const args = event.body.split(/\s+/);
    args.shift();

    let { messageID, threadID, senderID, body } = event;
    let tid = threadID,
        mid = messageID;
    const content = encodeURIComponent(args.join(" "));
    if (!args[0]) return api.sendMessage(" hm bolo bby😸 ...", tid, mid);
    try {
        const res = await axios.get(`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`);
        const respond = res.data.success;
        if (res.data.error) {
            api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        } else {
            api.sendMessage(respond, tid, (error, info) => {
                if (error) {
                    console.error(error);
                }
            }, mid);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("🤖 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚐𝚎𝚝𝚝𝚒𝚗𝚐 𝙳𝚊𝚝𝚊𝚋𝚊𝚜𝚎, 𝚜𝚘𝚛𝚛𝚢 𝚋𝚊𝚋𝚎 🥺", tid, mid);
    }
};

module.exports.run = async function ({ api, event }) {};
