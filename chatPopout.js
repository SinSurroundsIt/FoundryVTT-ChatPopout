Hooks.on("renderChatMessage", (message, html, data) => {
    var messageApps = message.apps;
    key = Object.keys(messageApps)[0];
    app = messageApps[key];
    const now = new Date().toLocaleDateString('en-US', {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });
    const messageTime = new Date(message.data.timestamp).toLocaleDateString('en-US', {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });
    var timeComp = now === messageTime;
    /*
    console.log(messageApps);
    console.log(key);
    console.log(message);
    console.log(now);
    console.log(messageTime);
    console.log(timeComp);
    */
    if (timeComp === true) {
        if (app === undefined) { //app is undefined if it is not a popout
            new ChatPopout(message).render(true);
        }
    }
})