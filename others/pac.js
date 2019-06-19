function FindProxyForURL(url, host) {
    if (isPlainHostName(host)) {
        return "DIRECT";
    }

    let proxyArray = [
        // "HTTPS pccw7.ghelper.net:443",
        // "HTTPS tw.ghelper.net:443",
        // "HTTPS hkt.ghelper.net:3389",
        "HTTPS www.pickdown.net:1443",
        "HTTPS us01.ghelper.net:1443",
        "HTTPS hgc.ghelper.net:443",
        // "HTTPS us02.ghelper.net:443",
        // "HTTPS hkbn3.ghelper.net:443",
        "HTTPS hkbn3.ghelper.net:443",
        "HTTPS www.copyplay.net:3389",

        "DIRECT"
    ];

    let proxyList = proxyArray.join(";");
    let fastProxy = [
        "HTTPS pccw7.ghelper.net:443",
        "HTTPS tw.ghelper.net:443"
        // "SOCKS5 104.224.165.191:8249",
        // "HTTPS www.wanniba.xyz:443",
        // "HTTPS www.oktrade.online:7766",
        // "HTTPS www.letswe.bid:443",
    ].concat(proxyArray).join(";");

    if (host == "android.com" || shExpMatch(host, "*.android.com")) {
        return fastProxy;
    }
    if (host == "gstatic.com" || shExpMatch(host, "*.gstatic.com") || host == "googleusercontent.com" || shExpMatch(host, "*.googleusercontent.com") || host == "gvt2.com" || shExpMatch(host, "*.gvt2.com") || host == "gvt3.com" || shExpMatch(host, "*.gvt3.com") || host == "ggpht.com" || shExpMatch(host, "*.ggpht.com") || host == "googleapis.com" || shExpMatch(host, "*.googleapis.com") || host == "google.com.hk" || shExpMatch(host, "*.google.com.hk") || host == "google.com.tw" || shExpMatch(host, "*.google.com.tw") || host == "google.com" || shExpMatch(host, "*.google.com") || host == "gmail.com" || shExpMatch(host, "*.gmail.com") || host == "ggpht.com" || shExpMatch(host, "*.ggpht.com") || host == "chrome.com" || shExpMatch(host, "*.chrome.com") || host == "googleadservices.com" || shExpMatch(host, "*.googleadservices.com") || host == "googleusercontent.com" || shExpMatch(host, "*.googleusercontent.com") || host == "googletagservices.com" || shExpMatch(host, "*.googletagservices.com") || host == "googlesyndication.com" || shExpMatch(host, "*.googlesyndication.com") || host == "google.co.jp" || shExpMatch(host, "*.google.co.jp") || host == "googlesource.com" || shExpMatch(host, "*.googlesource.com") || host == "googleblog.com" || shExpMatch(host, "*.googleblog.com")) {
        return fastProxy;
    }
    if (host == "wikipedia.org" || shExpMatch(host, "*.wikipedia.org")) {
        return fastProxy;
    }
    if (host == "dropbox.com" || shExpMatch(host, "*.dropbox.com")) {
        return fastProxy;
    }

    return proxyList;

}