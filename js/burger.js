document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    // console.log(burger);
    const nav = document.querySelector('.nav');
    // console.log(nav);
    const overlay = document.querySelector('.overlay');
    // console.log(overlay);

    document.addEventListener('click', (e) => {
    if (e.target.classList.contains('burger')) {
        burger.classList.toggle('burger--active');
        overlay.classList.toggle('open');
        nav.classList.toggle('open');
    };

    if (e.target.classList.contains('overlay')) {
        burger.classList.remove('burger--active');
        overlay.classList.remove('open')
        nav.classList.remove('open');
    };
   
    })
})