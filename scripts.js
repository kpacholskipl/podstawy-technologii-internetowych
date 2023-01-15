get('img#toolbar-image').click(function () {
})

function openHome() {
    location.replace("index.html")
}
function includeHTML() {
    var allElements, xhttp, file;
    allElements = [...document.getElementsByClassName("include")];
    allElements.forEach((element) => {
        file = element.getAttribute("include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        element.innerHTML = this.responseText;
                    }
                    element.removeAttribute("include-html");
                    includeHTML();
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    })
}
function randomColor() {
    // const allElements = [...document.getElementsByClassName("post-card--bar")];
    // const allClass = ['red', 'blue', 'green', 'yellow']
    // allElements.forEach((element) => {
    //     const color = allClass[parseInt(Math.random() * 100 % 4)]
    //     element.classList.add('post-card--bar__' + color)
    // })
}