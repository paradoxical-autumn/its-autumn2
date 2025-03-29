import { getCookieValue } from "./modules/cookies.js";
import { includeHTML } from "./modules/utils.js";

// check if warning read
if ((getCookieValue("has_read_warning") !== "true") && (window.location.pathname != "/warning.html")) {
    window.location.href="/warning.html?redir=" + encodeURIComponent(window.location.pathname)
}

document.addEventListener('DOMContentLoaded', function() {
    includeHTML();
});