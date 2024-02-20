const navSlide = () => {
    const mobile = document.querySelector('#mobile');
    const nav = document.querySelector('.navlist');
    const navList = document.querySelectorAll('.navlist li');
    const body = document.body; 

    const toggleMenu = () => {
        nav.classList.toggle('nav-toggle');
        mobile.classList.toggle('toggle');

        if (nav.classList.contains('nav-toggle')) {
            document.addEventListener('click', closeMenuOnClickOutside);
            body.style.overflow = 'hidden'; 
        } else {
            document.removeEventListener('click', closeMenuOnClickOutside);
            body.style.overflow = '';
        }
    };

    const closeMenuOnClickOutside = (event) => {
        if (!nav.contains(event.target) && !mobile.contains(event.target)) {
            toggleMenu();
        }
    };

    mobile.addEventListener('click', (event) => {
        event.stopPropagation(); 
        toggleMenu();
    });

    navList.forEach(link => {
        link.addEventListener('click', (event) => {
            event.stopPropagation(); 
            toggleMenu();
        });
    });
};

navSlide();
