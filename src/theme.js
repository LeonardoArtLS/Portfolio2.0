if (
    localStorage.theme === "light" ||
    (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: light)").matches)
) {
    document.documentElement.classList.remove("dark");
}

window.onload = () => {
    const checkbox = document.getElementById('buttonTheme');

    if (
        localStorage.theme === "light" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: light)").matches)
    ) {
        checkbox.checked = true;
    }

    const clickSound = new Audio("./sound/click1.wav");
    const click2Sound = new Audio("./sound/click2.wav");

    checkbox.addEventListener("change", function (event) {
        if (event.target.checked) {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
            clickSound.play();
        } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
            click2Sound.play();
        }
    });
};