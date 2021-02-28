let accordion = document.querySelectorAll('.accordion');

accordion.forEach((el) => {
    el.classList.remove('active');

    el.addEventListener('click', function () {
        this.classList.toggle('active');

        let panel = this.nextElementSibling;
        console.log(panel);
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});
