const btn = document.querySelector('.btn-inner');
const btnBase = document.querySelector('.btn-base');
const bodyWindow = document.querySelector('body');

btn.addEventListener('click', () => {
    btn.classList.toggle('turn-on');
    btn.classList.toggle('btn-inner-on');
    bodyWindow.classList.toggle('body-on');
    btnBase.classList.toggle('btn-base-on');
})