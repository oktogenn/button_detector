
let key = document.querySelectorAll('.key');

function t11(event) {
    key.forEach(elem => {
        let data = elem.getAttribute('data');

        if (event.code == data) {
            elem.classList.add('active');
        }
        else {
            elem.classList.remove('active');
        }
    });

}
document.querySelector('.i-11').onkeydown = t11;
