const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('images-loaded');

    const links = document.querySelectorAll('#categories a');

    links.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault();
            e.target.parentElement.querySelector('#categories a.active').classList
                .remove('active');
            e.target.classList.add('active');

            const categorie = e.target.innerHTML.toLowerCase().trim();
            categorie === 'all' ? grid.filter('[data-categorie]') : grid.filter(
                `[data-categorie="${categorie}"]`);
        });
    });

    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach(el => {
        el.addEventListener('click', () => {
            const path = el.getAttribute('src');
            const alternativeTitle = el.getAttribute('alt');
            const description = el.parentNode.parentNode.dataset.description;
            overlay.classList.add('active');
            document.querySelector('#overlay img').src = path;
            document.querySelector('#overlay img').alt = alternativeTitle;
            document.querySelector('#overlay img').title = alternativeTitle;
            // document.querySelector('#overlay .description').innerHTML = description;
        });
    });

    document.getElementById('close-popup').addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', e => {
        e.target.classList.remove('active');
    });
});