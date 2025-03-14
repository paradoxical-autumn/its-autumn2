export function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = `${cname}=${cvalue}; ${expires}`
}

export function getCookieValue(name) {
    return document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='))
        ?.split('=')[1] || null;
}