// Get The Article Element
let article = document.querySelector("article");

// Get The Current Date's Year
let year = new Date().getFullYear();

// Get The Start & End Points For year
let pastYear = year - 6;
let nextYear = year + 6;

// Loop To Create Years Elements
for (let i = pastYear; i <= nextYear; i++) {
    // Create The p Element To Use In The Loop
    let p = document.createElement("p");
    let attr = document.createAttribute("data-text");

    p.textContent = i;

    if (i === year) {
        p.className = "current";
    }

    attr.value = i;
    p.setAttributeNode(attr);
    article.appendChild(p);
}

let elements = document.querySelectorAll("article p");

// Add Animation On Scroll
window.addEventListener("scroll", () => {
    let height = window.innerHeight;
    let visible = 200;

    elements.forEach((ele) => {
        let top = ele.getBoundingClientRect().top;
        if (top < height - visible) {
            ele.classList.add("show");
        } else {
            ele.classList.remove("show");
        }
    });
});
