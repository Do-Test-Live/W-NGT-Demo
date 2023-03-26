function activeClass(id) {
    let collection = document.getElementsByClassName('all');
    for (let i = 0; i < collection.length; i++) {
        collection[i].setAttribute('style', 'display: none !important;')
    }

    collection = document.getElementsByClassName(id);
    for (let i = 0; i < collection.length; i++) {
        collection[i].setAttribute('style', 'display: flex !important;')
    }

    let tabLink = document.querySelectorAll(".ngt-nav-list li a");

    tabLink.forEach(function () {
        tabLink.forEach(function (item) {
            item.classList.remove("active");
        });
    });

    let element = document.getElementById(id);
    element.classList.add("active");
    console.log(id);
}



