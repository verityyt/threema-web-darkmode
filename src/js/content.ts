const extensionID = chrome.runtime.id
const tabURL = document.location.href

if(tabURL.startsWith("https://web.threema.ch/#!/messenger")) {
    console.log("Injecting darkmode stylesheet...")
    injectCSS(`chrome-extension://${extensionID}/src/css/darkmode.css`)
}

function injectCSS(href) {
    const s = document.createElement('link');
    s.setAttribute('rel', 'stylesheet');
    s.setAttribute('href', href);
    document.body.appendChild(s);
}