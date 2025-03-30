function writeAnimation(element, delay= 5, fade_duraction = 250, blur = false) {
    let animation_finished = false;

    const original_html = element.innerHTML;
    const content = element.innerText;
    element.innerText = '';

    element.classList.add("tyepwrite-show");

    const wrapper = document.createElement('span');
    wrapper.style.display = 'inline-block';
    element.appendChild(wrapper);

    document.getElementById('canvas').addEventListener('click', () => {
        if (animation_finished) {
            return;
        }
        wrapper.innerHTML = original_html;
        animation_finished = true;
    });

    for (let i = 0; i < content.length; i++) {
        const letter = document.createElement('span');
        letter.textContent = content[i];
        letter.style.opacity = '0';
        if (blur) {
            letter.style.filter = 'blur(5.5px)';
        }
        letter.style.transition = `opacity ${fade_duraction}ms ease-in-out, filter ${fade_duraction}ms ease-in-out`;
        wrapper.appendChild(letter);

        setTimeout(() => {
            letter.style.opacity = '1';
            if (blur) {
                letter.style.filter = 'blur(0px)';
            }
        }, i * delay);
    }

    setTimeout(() => {
        if (animation_finished) {
            return;
        }
        wrapper.innerHTML = original_html;
        animation_finished = true;
    }, content.length * delay + fade_duraction);
}

document.addEventListener('DOMContentLoaded', () => {
    var z, i
    z = document.getElementsByClassName("typewrite")
    for (i = 0; i < z.length; i++) {
        writeAnimation(z[i], 7, 250, true)
    }
})