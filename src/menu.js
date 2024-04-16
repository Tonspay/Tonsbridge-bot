const lan = require("./text")
require('dotenv').config()

async function main(bot, uid, req, data) {
    return await bot.sendMessage(uid, lan.text.main[0], {
        parse_mode: 'MarkDown',
        disable_web_page_preview: "true",
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{
                    "text": lan.buttonText.main[0],
                    web_app: {
                            url: 'https://bridge.tonspay.top/'
                    }
                }],
                [{
                    "text": lan.buttonText.main[1],
                    "url": "https://github.com/Tonspay/Tonspay-demo-steam-mystery-box-bot"
                }]
            ]
        })
    });
}

module.exports = {
    main,
}