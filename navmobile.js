const navSlide = () => {
    const mobile = document.querySelector('#mobile');
    const nav = document.querySelector('.navlist');
    const navList = document.querySelectorAll('.navlist li');

    mobile.addEventListener('click', () => {

        nav.classList.toggle('nav-toggle');

        mobile.classList.toggle('toggle');
    });
    
    navList.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-toggle');
            mobile.classList.remove('toggle');
        });
    });

}
navSlide();

