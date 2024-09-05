document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");

    for(const image of images) {
        fetch("https://lastfm.freetls.fastly.net/i/u/770x0/d0be388db17273a7ffce1b48f8bfefef.jpg")
        .then (response => response.json ())
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;
        })
    }

})