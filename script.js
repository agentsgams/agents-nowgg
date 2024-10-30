function goNowgg() {
    var url = document.getElementById("url").value;

    var regex = /^https:\/\/now\.gg\/apps\/([^/]+)\/(\d+)\/([^/]+)$/;
    if (regex.test(url)) {
        window.open("https://agentsunblckr-agentstuff.vercel.app/proxy/" + url)
    } else {
        alert("Please enter a valid Now.gg URL and try again (Use https:// at the start of your URL)!");
    }
}

function goNowggButtons(player) {
    var url = ""
    switch (player) {
        case "rblx":
            url = 'https://now.gg/apps/a/10020/b.html'
    }
    window.open("https://agentsunblckr-agentstuff.vercel.app/proxy/" + url)
}