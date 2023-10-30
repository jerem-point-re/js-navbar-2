window.addEventListener("scroll", () => {
    
    let pastPos = 0;
    const scrollbar = window.scrollY;

    if (scrollbar > pastPos) {
        document.querySelector('#nav').style.top = '-60px';
    } else {
        document.querySelector('#nav').style.top = 0;
    };

});