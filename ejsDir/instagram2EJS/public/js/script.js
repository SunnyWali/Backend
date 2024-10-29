const button = document.querySelectorAll("button");

for (let btn of button) {
    btn.addEventListener('click', () => {
        console.log("Button is clicked");
    });
}
