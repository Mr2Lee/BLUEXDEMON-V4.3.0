const version = require("@whiskeysockets/baileys/package.json").version



//Input number for pair code
global.pairingNumber = "263719718777"




//DO NOT EDIT OR MODD
global.botNumber = pairingNumber263719718777
global.domain = "https://.nobodysey.me"
global.apikey = "ptla_DfGlmoY7jCzmkNUgyK925FPVE08Kr4mxwLMep"
global.capikey = "ptlc_GTm42E3qIwbLW3K9w3htljUvhGvnG71hoPTqE"
global.egg = "15"
global.loc = "1"
global.anticall = false
global.autoReadChat = false
global.alwaysonline = true
global.autoswview = true
global.public = true
global.autoreact = true
global.antidelete = false
global.autotyping = true
global.autoBio = true
global.antiSpam = true
global.sign = "🌹"
// ☞ ➻ ➽ ☛ 〆 
global.bank = "PALMPAY"
global.bankname = "DIANA DAN"
global.accnumber = "9130592590"
global.language = "en"
global.sessionName = "session"
global.pairingCode = true 
global.runWith = "𝙽𝙾𝙳𝙴.𝙹𝚂"
global.newsletterJid = "120363304326105871@newsletter"
global.newsletterName = "MR_LEE ARMY 𝐕1"
global.caption = "𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝚋𝚢 MR_LEE🌹"
global.ownerName = "MR_LEE🌹"
global.syt = 'https://whatsapp.com/channel/0029VasSPGR9WtBx57FbhW3O'
global.sgc = 'https://whatsapp.com/channel/0029VasSPGR9WtBx57FbhW3O'
global.sig = 'https://whatsapp.com/channel/0029VasSPGR9WtBx57FbhW3O'
global.web = 'https://whatsapp.com/channel/0029VasSPGR9WtBx57FbhW3O'
//setbot
global.botName = "MR_LEE ARMY V1" 
global.wm = "MR_LEE 𝐕1"
global.fake = botName
global.setmenu = "image" 
global.docType = "application/vnd.ms-excel"
global.themeemoji = '🌹'
global.fotoRandom = [
"https://wallpapercave.com/wp/wp12801047.jpg",
"https://wallpapercave.com/wp/wp12456894.jpg"]
global.baileysMd = true
global.multi = false
global.prefa = "!"
global.Console = false
global.autorespon = false
global.copyright = `MR_LEE 🌹`
global.baileysVersion = `${themeemoji}Baileys ${version}`
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="Bot WhatsApp"
global.packName = `MR_LEE`
global.authorName = "MR_LEE 🌹"
global.replyType = "web"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = true
global.autoSticker = true
global.gamewaktu = 60
global.limitCount = 30
global.Intervalmsg = 1000
global.gris = '`'
global.fileStackApi ="AVKHbeyXsT0G9IKI01qenz"

global.skizo = 'memberaja'
global.Betabotz = 'LSd7Lq9S'
global.Lolhuman = '652c7664865e2b0e70929768',
global.FilestackApi = 'AJgyzwz0FQk67sTuplYoiz'  
global.gcounti = {
'prem' : 1000,
'user' : 5
} 
 



let d = new Date();
      let locale = "en";
      let gmt = new Date(0).getTime() - new Date("1 January 2024").getTime();
      let week = d.toLocaleDateString(locale, { weekday: "long" });
      const calender = d.toLocaleDateString("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      });

global.calender = calender;

const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
