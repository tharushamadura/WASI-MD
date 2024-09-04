import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'

//Owner Numbers 
global.owner = [
  ['923135673658', 'wasi', false],
  [''], 
  [''],
]

//global.pairingNumber = "" //put your bot number here
global.mods = ['923192173398'] 
global.prems = ['923192173398', '923192173398', '923192173398']
global.allowed = ['923192173398']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api.fgmods.xyz': 'dEBWvxCY'
}

// Sticker WM
global.botname = '𝗪𝗔𝗦𝗜-𝗠𝗗'
global.princebot = '🛡️𝗪𝗔𝗦𝗜 𝗧𝗘𝗖𝗛🛡️'
global.packname = '𝗪𝗔𝗦𝗜♥️' 
global.author = '𝗧𝗘𝗖𝗛♥️' 
global.princeig = 'https://www.instagram.com' 
global.princegp = 'https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j'
global.menuvid = 'https://i.imgur.com/0UK6D3b.mp4'
global.Princesc = '' 
global.princeyt = 'https://youtube.com/@wasitech1'
global.Princelog = 'https://i.imgur.com/ujxeU8g.jpeg'
global.thumb = fs.readFileSync('./Assets/wasi.png')

global.wait = '*♻️ _ʟᴏᴅɪɴɢ ᴘʟᴢ ᴡᴀɪᴛ ᴅᴇᴀʀ _*\n*▰▰▰▱▱▱▱▱*'
global.imgs = '*🖼️ _𝙶𝙴𝚃𝚃𝙸𝙽𝙶 𝚈𝙾𝚄𝚁 ɪᴍᴀɢᴇs 𝚆𝙰𝙸𝚃..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '♻️'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🌀' 

global.multiplier = 69 
global.maxwarn = '2' // máxima adverteneyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUlYZGZ1dHc2Q3RnUEVUN1NTZXRzZm5OT0FJKy9XK3VSalN4MFFVYzYwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2JBNTA4ejJrMUg4MCtaaE54SDhxTVMxMlZFTmdhWUE1Um10K2tmekFERT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SGlqQlYrWDY1cTZLN1dDRy9LYTBSRG1nNStOeWdIZ21xTGR1eGxqaGxvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpK3VsWVhJVnpvSlVsN1NLb3Z1SXZld3ppYWJpR3E5Z0tnM3Nwc0dqYVhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdONk9vRDVEQjFYUnNhYjNBM0FYY3d5M1BxeDhQdmhxbEJ1WGNpQmFObXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZBQ2ZYcHFNK2hVVmdLUGNvNVlEQjl1YWJVM1JBNXNvcDRjUU93OEFwWDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUo4VkJlUS9LUkJnRi9QbzY3RXRJdW95NUZZaUU2d0VMQ2hQL0RnakswWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTURwZVl1czdTSnBoWFkzUlBGaHBCTy9PY09QL3RXN0ZUdGZTOVE4VXF3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5IaXNqS1NnT1ZVd0k3akJsaDIvenRRYlB6R1o3L0U4RUxvT1o4a3dNSlRCUFQwSGNSd0hRRDZqcGtjVG9HRUgrNjUxczhZRTlaUjI5b2Rackd3eGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJIdTY4aVVaRzQ3bVFPcmFIcndxcTdOMVEyUnVTTUc5MkhvWnVkYmdYZ2YwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJwNkQ0Zk1SeVFENjFnenlJWHN4Vm93IiwicGhvbmVJZCI6Ijg1YzJlZGNkLWYxNmMtNDg4ZS1iNzI3LWE3NmZkNzQ5YTMxMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGYng4c0JQclJYNitkUWllRHI2U3lzQmRVUDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWRIWnU2TERTRk1DTEY2bTJ5czVDekNTT0ZBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkU2WUFBRVJGIiwibWUiOnsiaWQiOiI5NDcyMTYxNDM4MDozMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT3Foa3ZRQkVOM3AzN1lHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNGcxdVFuSkdDZGhYNUMwZkpCdEtLNkdsR0tWWGtvUzdVMkdXMVViVk5WYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRGYxckdMVGt3ZVRrdGZYVWFvS25JQm1UaldPYURqSEZCZXVOSjdIS1c5aXI2Tll2a0Y1cnhPT1hiUEhNaE9jZUJvdnNRaEV4ZWFucE9KQjVpczVCQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IlptMEdOZjdiZktlMTYxenB5bWw2U2NzN09JcEdoZ3VCTlRZUm4ybkRhRThFYmZDUzZxZDFEdjFSWjl5Z3Q0L3ZHYUk0bGpPaVlYMFJRQVFPNStpeml3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MjE2MTQzODA6MzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUlOYmtKeVJnbllWK1F0SHlRYlNpdWhwUmlsVjVLRXUxTmhsdFZHMVRWWCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTQyODk2MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLVG0ifQ==cias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
