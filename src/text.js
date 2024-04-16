const text = {
    "main": [
        `🔥*Tonsbridge Bot*🔥

Tonsbridge is a TON bridge aggregator base on [Tonspay](https://www.tonspay.top) .

Support chains : \`BSC\` | \`ETH\`.

Support bridge : [OfficialBridge](https://bridge.ton.org/) | [Fixfloat](https://ff.io)

More details about *Tonsbridge* can be found [here](https://docs.tonspay.top/tonsbridge/genral)
`
    ],
}

const buttonText = {
    "main": [
        `Bridge`,
        `Source Code`,
        `Share Tonsbridge`
    ],
}

function close()
{
    return [
        {
            text:'❎Close',
            callback_data:"/close"
        },
        {
            text:'🏡Menu',
            callback_data:"/menu"
        }
    ]
}
module.exports = {
    text,
    buttonText,
    close
}