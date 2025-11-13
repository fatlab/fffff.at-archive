let links = document.querySelectorAll(".page");

for (let i=0; i<links.length; i++) {
    links[i].addEventListener("mouseover", handleMouseOver);
    links[i].addEventListener("focus", handleMouseOver);
    links[i].addEventListener("mouseout", handleMouseOut);
}


function handleMouseOver(event) {
    handleMouseOut();
    event.currentTarget.classList.add("active");
    let index = event.currentTarget.id.split("page")[1];
    let video = document.querySelector("#video" + index + " video");

    video.parentElement.classList.add("active");
    video.setAttribute("src", video.dataset.src);
}

function handleMouseOut() {
    let videos = document.querySelectorAll(".backgroundVideos video");
    for (let i=0; i<videos.length; i++) {
        videos[i].setAttribute("src", "");
        videos[i].parentElement.classList.remove("active");
    }
    let links = document.querySelectorAll("a.page");
    for (let i=0; i<links.length; i++) {
        links[i].classList.remove("active");
    }
}
