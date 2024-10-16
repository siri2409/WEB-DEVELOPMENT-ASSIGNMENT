
let collapsibles = document.getElementsByClassName("collapsible");

for (let i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


const toc = document.getElementById("toc");
const headers = document.querySelectorAll("h1, h2");

headers.forEach(header => {
    let tocItem = document.createElement("li");
    let link = document.createElement("a");

   
    link.href = `#${header.parentNode.id}`;
    link.textContent = header.textContent;
    tocItem.appendChild(link);
    toc.appendChild(tocItem);
});
