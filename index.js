let toggle_btn;
let app_wrapper;
let hamburger_menu;
const main = document.querySelector('main');


let darkTheme = false;

const updateVars = () => {
    toggle_btn = document.querySelector('.toggle-theme-btn');
    app_wrapper = document.querySelector('.app-wrapper');
    hamburger_menu = document.querySelector('.hamburger-menu');
}


updateVars();

const toggleThemeAnimation = () => {
    darkTheme = !darkTheme;;
    hamburger_menu.addEventListener("click", ()=>{
        console.log('toggled')
    })
    let clone = app_wrapper.cloneNode(true);
    if (darkTheme) {
        clone.classList.remove("light");
        clone.classList.add("black")
    } else {
        clone.classList.remove("black");
        clone.classList.add("light")
    }
    clone.classList.add("copy")
    main.appendChild(clone);

    document.body.classList.add('noScroll');

    clone.addEventListener('animationend', () => {
        document.body.classList.remove('noScroll');
        app_wrapper.remove()
        clone.classList.remove("copy")
        updateVars();
        updateEvents();
    })
}

const updateEvents =()=>{
    toggle_btn.addEventListener("click", toggleThemeAnimation);
    hamburger_menu.addEventListener("click", ()=>{
        app_wrapper.classList.toggle("active")
    })
}

updateEvents();
