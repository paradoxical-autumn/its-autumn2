import { setCookie } from "./modules/cookies.js";

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const returnURL = urlParams.get("redir")

    // let flashing_imgs = true;
    // let flashing_img_btn = document.getElementById("flashing-img-btn")

    document.getElementById("warning-button").onclick = function () {
        setCookie("has_read_warning", true, 30);

        window.location.href = returnURL ?? "/";
    }

    // flashing_img_btn.onclick = function () {
    //     if (flashing_imgs === true) {
    //         flashing_imgs = false;
    //         flashing_img_btn.classList.add("wrn-btn-grn");
    //         flashing_img_btn.innerHTML = "flashing elements disabled"
    //     } else {
    //         flashing_imgs = true;
    //         flashing_img_btn.classList.remove("wrn-btn-grn");
    //         flashing_img_btn.innerHTML = "flashing elements enabled"
    //     }
        
    // }
});
