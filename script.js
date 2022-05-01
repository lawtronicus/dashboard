const switchMode = function() {
    const main = document.querySelector("main");
    const aside = document.querySelector("aside");
    const slider = document.querySelector(".mode");
    const body = document.querySelector("body");
    const yourProjects = document.querySelector(".projects_title");
    const announcements = document.querySelector(".announcements_title");
    const trending = document.querySelector(".trending_title");

    console.log(slider.checked);
    if (slider.checked === false) {
        main.style.backgroundColor = "var(--bg-color)";
        aside.style.backgroundColor = "var(--bg-color)";
        body.style.backgroundColor = "var(--bg-color)";
        yourProjects.style.color = "black";
        announcements.style.color = "black";
        trending.style.color = "black";
    }
    else {
        main.style.backgroundColor = "black";
        aside.style.backgroundColor = "black";
        body.style.backgroundColor = "black";
        yourProjects.style.color = "white";
        announcements.style.color = "white";
        trending.style.color = "white";
    }
}

const slider = document.querySelector(".mode");

slider.addEventListener('click', switchMode);