const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254769480999";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254769480999";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_46_05_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwLFxuICAgICAgICA2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTksXG4gICAgICAgIDc3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk5LFxuICAgICAgICA4NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNyxcbiAgICAgICAgNzksXG4gICAgICAgIDExMixcbiAgICAgICAgODgsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MCxcbiAgICAgICAgNixcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc1LFxuICAgICAgICA0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI3LFxuICAgICAgICA1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDIxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MixcbiAgICAgICAgODksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDU0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3LFxuICAgICAgICA0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMyxcbiAgICAgICAgODEsXG4gICAgICAgIDEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4LFxuICAgICAgICAwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc3LFxuICAgICAgICA2LFxuICAgICAgICA1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1ZTnYzNTgwTTV0ZXJDYTlDTkFRLzg0MnByUGV2ZGJOUjgvYi81cFg4UG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdGU3RsdmgyVEh1WHlRRko1cjhFMVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDI5OGVlNmQtYjNmYS00NmVkLWFhNzQtMTg4YTFjNzVhOGRkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgsXG4gICAgICAxMjIsXG4gICAgICAyMDEsXG4gICAgICAyMixcbiAgICAgIDgzLFxuICAgICAgMjI4LFxuICAgICAgMjE4LFxuICAgICAgMTM1LFxuICAgICAgOTQsXG4gICAgICAzLFxuICAgICAgMjAzLFxuICAgICAgMTM4LFxuICAgICAgMjUyLFxuICAgICAgMTcyLFxuICAgICAgODgsXG4gICAgICAxMzUsXG4gICAgICAxNDQsXG4gICAgICAyMDQsXG4gICAgICAyMTAsXG4gICAgICAyMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgMjI0LFxuICAgICAgMTA5LFxuICAgICAgMTg5LFxuICAgICAgMzksXG4gICAgICA4NyxcbiAgICAgIDQyLFxuICAgICAgMjAxLFxuICAgICAgMTI4LFxuICAgICAgMTU5LFxuICAgICAgMzUsXG4gICAgICA5OSxcbiAgICAgIDI0OCxcbiAgICAgIDYwLFxuICAgICAgMTE4LFxuICAgICAgMTA1LFxuICAgICAgMTIzLFxuICAgICAgMTI4LFxuICAgICAgMTI4LFxuICAgICAgNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVEFGTkpQUUxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc2OTQ4MDk5OToyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTg2MjY1NTUyNjUyNjc6MjRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTW9tYW55aVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05yL3VNNEdFUHFieXJFR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiekMxTHNmaDQxSVRFbnZSRHliVFdoTGV0MndmWUlWK1VHY0xoVWtmc1ZDMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsVTlmYmRaRmZWZWtTUUxZWE5UMFlWY2JyZjhLSlBEY3MxSjZ0N0VGK3lLZHFKU3pPemNpa3NWWUpBN3lLRHN4b2NBcWNjbUJ6K0k5VVFXVkxITFBCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYOU5hbnc2OHBRdmExdnplRVkvQW5YUzRMK3BYTnJvQlV3S2xyNFpOa09ESHNOZXBxRGFjMlZYa2RCakFXdjJjNWpQSjM0elgrazF2U2RsYnZBMm5nZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3Njk0ODA5OTk6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTQ1ODkxODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCOFFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUI4US5qc29uIjogIntcImtleURhdGFcIjpcIjNoNEllSklyblFvV0JDMG5rZlVQQytGbkdEWUtmNTZwdFNtaVl0Tng5M2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3NTEyNDQ0MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE0NTg4MTEzOTAyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "CLINTON",
  ownername:process.env.OWNER_NAME|| "CLINTON",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
