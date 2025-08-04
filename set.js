
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VU2bKiSBD9l3q9RgOyasSNGBYRQdwQt4l5KKHAUiywKETs8N8n0L7dHTE9PXd4KmrJPOfkyfwKSI5L5KEG9L+CguIrZKhdsqZAoA+MKkkQBR0QQwZBH3gOfju5TXU0l9qpUNIsMbfjeVNLiZzfka0sxgKRhXpbrKN38OiAotpnOPpNwGMzWVppMck5YUtCzuqF25VWJIN9ZVhpZpyuXGrrlVgoZPQOHm1EiCkm6aA4oDOiMPNQM4OYfg6+PjrfNzG3jLlb4KYeyvfSjpDrDN9O2pY2zO3eWTAJvXLAfw5+pizfitqjhx1K9SGeTvej8pZfJ5fM9IOLaKi3k5oM+OHGjl7wS5wSFI9iRBhmzad1v5jHYkb5vasy7bogXDHxz5p+s8+sO9ylUS4a8eUgzKp6I30O+L0rxWQtKnvbob16YE1qf+bOlA26F5NYNvJB4spDXcX8Sv8Z+Ix+eOX0f3Q3/aw3wTuoJfZxcj2Ml0dJYeS45W6ZEJHtcEdKc733jKujfQ4+3sVQtLubHe+uC86Bp02lzlbGjjqjm7kcDyXuRq/de6VY/A/4kFX0dygXsBsduXOWomQeBswvvFHgE8MPzotwb4jrFRqbqbdZ4UB0Sk5Kx/nQD/eH2+ou37w6cg7TqNBGg/WbmYiXcBr0bpvGrN+fjE6oGcWgLzw6gKIUl4xChnPS7nUloQNgfA1QRBF7yguma9nrDkdvJT8JEH+y6rQprbe5nTunlT3XbaolcH4Mt5do+w46oKB5hMoSxQ4uWU4bH5UlTFEJ+n8+K9WSpuicM+TiGPRBV5ZUSVClnqYqf5Rf6gNkJSyKLwQx0AEJzc8+An1GK9QBzweioWoy39MEUdUVRRK0gWWrtqaaXcVUJLvXUjy/ki7xGZUMngvQF1RZEiWeV+XHXx1A0I29/NOyFoUOSDAtWUiqIsth/GGuj0MYRXlFWNCQyGwXiII+/2MbMYZJWrbMKgJpdMBXZLY8QD+BWYm+C40oij+4fBseZh639Q92vdHEmw9Bi70N9A9t+tov5Mme1wRJlFSNF0Re7glqr73ZHjy+I2wDxohBnJVtB0yRS410Lo43g5u+3TqBrnu63hbvg9GHQ18OSJXwnjbG/FSf06T2UmlXeN7AcAfxzmGZTWE1o5Y6tm789ldBQB/YlCmaa2sHu4qs1OPrcOJ7K3usWLIh1ZzIndl85ssXWIsHk+2GvXVoRI1NHFv0o013w8sp59jkMphL0K3zIh4sBDN9b7PF6Ioj9HMyLeUX40u9SA/uerXc+udI3QsYHafmad5t9PU02XSRzPSc0Km8PpUSd9Wnk6bcl5tQflvP4eaYi7jHWzuoeccDd3E1Yumv3nn2bvZtZuJvrsbP3wSj5wgisK3gf9fuBby1GP/o/BTj21D7l8FgbKeZL/lp6Ppu7mhmPh3CAB/0YOGsF+puAbv0qNRvTa3FQ/BovV5kkCU5PYM+gCSmOY5BB9C8aj07Ikn+u1mpj0bW/MU8gyXTf/TBL1pL0V63ZjQvHFgeWhFWqnoJW1M3elEEDLKPtgJ6+xnHGjz+Br3nRYf5BwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "254741749876", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙,🎇,🫥,☄️", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "254741749876", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "LEWI", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "DREAMKID", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "true",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "DREAMKID𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "true",
AUTO_BIO: process.env.AUTO_BIO || "true",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "Dreamkid☄️🎮 ",
CHAT_BOT: process.env.CHAT_BOT || "true", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
