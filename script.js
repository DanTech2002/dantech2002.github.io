document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

if (window.innerWidth < 424.9){
    h3.textContent = "Nick Vujicic, Australian-\nAmerican Evangelist";
}
else{
    h3.textContent = "Nick Vujicic, Australian-American Evangelist";
}
h3.setAttribute('style', 'white-space: pre;');

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })

})