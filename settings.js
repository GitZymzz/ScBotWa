const fs = require('node:fs');

const config = {
    owner: ["6283853787611"],
    name: "𝙇𝙪𝙣𝙤𝙭-𝘽𝙤𝙩𝙕",
    ownername: '𝒁𝒚𝒎𝒛𝒛', 
    ownername2: '𝒁𝒚𝒎𝒛𝒛',
    prefix: [".", "?", "!", "/", "#"], //Tambahin sendiri prefix nya kalo kurang
    wagc: 'https://whatsapp.com/channel/0029VakakCcLI8YV5UInP61u',
    saluran: '120363300298271061@newsletter', 
    jidgroupnotif: '120363368798656053@g.us', 
    saluran2: '120363300298271061@newsletter', 
    jidgroup: '120363368798656053@g.us', 
    jidch: '120363300298271061@newsletter', 
    sessions: "sessions",
    sticker: {
      packname: "𝙇𝙪𝙣𝙤𝙭-𝘽𝙤𝙩𝙕",
      author: "by : 𝒁𝒚𝒎𝒛𝒛 〆"
    },
   messages: {
      wait: "*( Loading )* Tunggu Sebentar...",
      owner: "*( Denied )* Kamu bukan owner ku !",
      premium: "*( Denied )* Fitur ini khusus user premium",
      group: "*( Denied )* Fitur ini khusus group",
      botAdmin: "*( Denied )* Lu siapa bukan Admin group",
      grootbotbup: "*( Denied )* Jadiin Yuta-Botz admin dulu baru bisa akses",
   },
   database: "hanako-db",
   tz: "Asia/Jakarta"
}

module.exports = config

let file = require.resolve(__filename);
fs.watchFile(file, () => {
   fs.unwatchFile(file);
  delete require.cache[file];
});
