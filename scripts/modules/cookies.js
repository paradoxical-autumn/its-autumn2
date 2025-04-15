export function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setDate(d.getDate() + exdays);
    let expires = "expires=" + d.toUTCString();
    document.cookie = `${cname}=${cvalue}; ${expires}`
}

export function getCookieValue(name) {
    return document.cookie
        .split('; ')
        .find(row => row.startsWith(name + '='))
        ?.split('=')[1] || null;
}